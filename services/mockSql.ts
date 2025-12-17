
import { SqlResult } from '../types';

// ==================== TYPES ====================
type ColumnType = 'INT' | 'VARCHAR' | 'DECIMAL' | 'DATETIME' | 'BIT' | 'MONEY' | 'FLOAT' | 'CHAR' | 'TEXT' | 'DATE';

interface ColumnDef {
  name: string;
  type: string;
  isNullable: boolean;
  isPrimaryKey: boolean;
  isIdentity: boolean;
  defaultValue?: any;
  checkConstraint?: string;
  foreignKey?: { table: string; col: string };
}

interface TableDef {
  name: string;
  columns: ColumnDef[];
  rows: any[];
  constraints: string[];
}

interface DatabaseDef {
  name: string;
  tables: Record<string, TableDef>;
}

interface SystemState {
  databases: Record<string, DatabaseDef>;
  currentDb: string;
  messages: string[];
  rowsAffected: number;
}

// ==================== STATE MANAGEMENT (IN-MEMORY) ====================
let globalState: SystemState | null = null;

const createInitialState = (): SystemState => {
  
  const orderDetailsTable = {
    name: 'ORDERDETAILS',
    columns: [
      { name: 'ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
      { name: 'ORDER_ID', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
      { name: 'PROD_ID', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
      { name: 'QUANTITY', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false }
    ],
    rows: [
      { ID: 1, ORDER_ID: 1001, PROD_ID: 10, QUANTITY: 1 },
      { ID: 2, ORDER_ID: 1001, PROD_ID: 20, QUANTITY: 2 },
      { ID: 3, ORDER_ID: 1002, PROD_ID: 30, QUANTITY: 1 },
      { ID: 4, ORDER_ID: 1003, PROD_ID: 20, QUANTITY: 5 }
    ],
    constraints: ['PK_ORDERDETAILS']
  };

  // --- 1. University Database ---
  const universityDb: DatabaseDef = {
    name: 'UniversityDB',
    tables: {
      DEPARTMENTS: {
        name: 'DEPARTMENTS',
        columns: [
          { name: 'DEPT_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: false },
          { name: 'DEPT_NAME', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { DEPT_ID: 10, DEPT_NAME: 'Computer Science' },
          { DEPT_ID: 20, DEPT_NAME: 'Mathematics' },
          { DEPT_ID: 30, DEPT_NAME: 'Physics' },
          { DEPT_ID: 40, DEPT_NAME: 'Engineering' }
        ],
        constraints: ['PK_DEPARTMENTS']
      },
      STUDENTS: {
        name: 'STUDENTS',
        columns: [
          { name: 'ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'NAME', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'EMAIL', type: 'VARCHAR(100)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'GPA', type: 'DECIMAL(3,2)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'DEPT_ID', type: 'INT', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { ID: 1, NAME: 'Ahmed Ali', EMAIL: 'ahmed@uni.edu', GPA: 3.8, DEPT_ID: 10 },
          { ID: 2, NAME: 'Sara Salem', EMAIL: 'sara@uni.edu', GPA: 3.9, DEPT_ID: 10 },
          { ID: 3, NAME: 'Omar Youssef', EMAIL: 'omar@uni.edu', GPA: 2.5, DEPT_ID: 40 },
          { ID: 4, NAME: 'Laila Mahmoud', EMAIL: 'laila@uni.edu', GPA: 3.2, DEPT_ID: 20 },
          { ID: 5, NAME: 'Hassan Kamal', EMAIL: 'hassan@uni.edu', GPA: 2.8, DEPT_ID: 30 }
        ],
        constraints: ['PK_STUDENTS']
      },
      COURSES: {
        name: 'COURSES',
        columns: [
          { name: 'COURSE_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: false },
          { name: 'TITLE', type: 'VARCHAR(100)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'CREDITS', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'DEPT_ID', type: 'INT', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { COURSE_ID: 101, TITLE: 'Intro to CS', CREDITS: 3, DEPT_ID: 10 },
          { COURSE_ID: 102, TITLE: 'Data Structures', CREDITS: 4, DEPT_ID: 10 },
          { COURSE_ID: 201, TITLE: 'Calculus I', CREDITS: 3, DEPT_ID: 20 },
          { COURSE_ID: 301, TITLE: 'Quantum Physics', CREDITS: 4, DEPT_ID: 30 }
        ],
        constraints: ['PK_COURSES']
      },
      ENROLLMENTS: {
        name: 'ENROLLMENTS',
        columns: [
          { name: 'ENROLL_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'STUDENT_ID', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'COURSE_ID', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'GRADE', type: 'CHAR(2)', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { ENROLL_ID: 1, STUDENT_ID: 1, COURSE_ID: 101, GRADE: 'A' },
          { ENROLL_ID: 2, STUDENT_ID: 1, COURSE_ID: 102, GRADE: 'A-' },
          { ENROLL_ID: 3, STUDENT_ID: 2, COURSE_ID: 101, GRADE: 'A' },
          { ENROLL_ID: 4, STUDENT_ID: 3, COURSE_ID: 101, GRADE: 'B' },
          { ENROLL_ID: 5, STUDENT_ID: 4, COURSE_ID: 201, GRADE: 'B+' }
        ],
        constraints: ['PK_ENROLLMENTS']
      },
      USERS: {
        name: 'USERS',
        columns: [
          { name: 'ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'NAME', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'AGE', type: 'INT', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'CITY', type: 'VARCHAR(50)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'COUNTRY', type: 'VARCHAR(50)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'ACTIVE', type: 'BIT', isNullable: false, isPrimaryKey: false, isIdentity: false, defaultValue: 1 }
        ],
        rows: [
          { ID: 1, NAME: 'Ahmed', AGE: 25, CITY: 'Cairo', COUNTRY: 'Egypt', ACTIVE: 1 },
          { ID: 2, NAME: 'Sarah', AGE: 22, CITY: 'Dubai', COUNTRY: 'UAE', ACTIVE: 1 },
          { ID: 3, NAME: 'John', AGE: 30, CITY: 'London', COUNTRY: 'UK', ACTIVE: 0 },
          { ID: 4, NAME: 'Mona', AGE: 28, CITY: 'Cairo', COUNTRY: 'Egypt', ACTIVE: 1 }
        ],
        constraints: ['PK_USERS']
      },
      CUSTOMERS: {
        name: 'CUSTOMERS',
        columns: [
          { name: 'ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'NAME', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'AGE', type: 'INT', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'ADDRESS', type: 'VARCHAR(50)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'SALARY', type: 'DECIMAL(10,2)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'COUNTRY', type: 'VARCHAR(50)', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { ID: 1, NAME: 'Ramesh', AGE: 32, ADDRESS: 'Ahmedabad', SALARY: 2000.00, COUNTRY: 'India' },
          { ID: 2, NAME: 'Khilan', AGE: 25, ADDRESS: 'Delhi', SALARY: 1500.00, COUNTRY: 'India' },
          { ID: 3, NAME: 'Kaushik', AGE: 23, ADDRESS: 'Kota', SALARY: 2000.00, COUNTRY: 'India' },
          { ID: 4, NAME: 'Chaitali', AGE: 25, ADDRESS: 'Mumbai', SALARY: 6500.00, COUNTRY: 'India' },
          { ID: 5, NAME: 'Hardik', AGE: 27, ADDRESS: 'Bhopal', SALARY: 8500.00, COUNTRY: 'India' },
          { ID: 6, NAME: 'Komal', AGE: 22, ADDRESS: 'MP', SALARY: 4500.00, COUNTRY: 'India' }
        ],
        constraints: ['PK_CUSTOMERS']
      },
      EMPLOYEES: {
        name: 'EMPLOYEES',
        columns: [
          { name: 'ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'NAME', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'SALARY', type: 'DECIMAL(10,2)', isNullable: true, isPrimaryKey: false, isIdentity: false },
          { name: 'MANAGER_ID', type: 'INT', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { ID: 1, NAME: 'Ali', SALARY: 10000, MANAGER_ID: null },
          { ID: 2, NAME: 'Hassan', SALARY: 8000, MANAGER_ID: 1 },
          { ID: 3, NAME: 'Mona', SALARY: 8000, MANAGER_ID: 1 },
          { ID: 4, NAME: 'Sara', SALARY: 6000, MANAGER_ID: 2 }
        ],
        constraints: ['PK_EMPLOYEES']
      },
      PRODUCTS: {
        name: 'PRODUCTS',
        columns: [
          { name: 'PROD_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'NAME', type: 'VARCHAR(100)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'PRICE', type: 'DECIMAL(10,2)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'STOCK', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false, defaultValue: 0 }
        ],
        rows: [
          { PROD_ID: 10, NAME: 'Laptop Dell', PRICE: 12000.00, STOCK: 5 },
          { PROD_ID: 20, NAME: 'Mouse Wireless', PRICE: 250.00, STOCK: 50 },
          { PROD_ID: 30, NAME: 'Keyboard Mechanical', PRICE: 1500.00, STOCK: 20 },
          { PROD_ID: 40, NAME: 'Monitor 24"', PRICE: 4000.00, STOCK: 10 }
        ],
        constraints: ['PK_PRODUCTS']
      },
      ORDERS: {
        name: 'ORDERS',
        columns: [
          { name: 'ORDER_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'CUSTOMER_ID', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'ORDER_DATE', type: 'DATETIME', isNullable: false, isPrimaryKey: false, isIdentity: false, defaultValue: 'GETDATE()' },
          { name: 'STATUS', type: 'VARCHAR(20)', isNullable: true, isPrimaryKey: false, isIdentity: false, defaultValue: 'Pending' },
          { name: 'AMOUNT', type: 'DECIMAL(10,2)', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { ORDER_ID: 1001, CUSTOMER_ID: 1, ORDER_DATE: '2023-10-01 10:30:00', STATUS: 'Delivered', AMOUNT: 2500.00 },
          { ORDER_ID: 1002, CUSTOMER_ID: 2, ORDER_DATE: '2023-10-02 14:15:00', STATUS: 'Shipped', AMOUNT: 1500.00 },
          { ORDER_ID: 1003, CUSTOMER_ID: 1, ORDER_DATE: '2023-10-05 09:00:00', STATUS: 'Pending', AMOUNT: 500.00 }
        ],
        constraints: ['PK_ORDERS']
      },
      // Ensure ORDERDETAILS is present
      ORDERDETAILS: orderDetailsTable,
      // Add alias for potential naming conflict/confusion
      ORDER_DETAILS: { ...orderDetailsTable, name: 'ORDER_DETAILS' }
    }
  };

  // --- 2. Shop Database ---
  const shopDb: DatabaseDef = {
    name: 'ShopDB',
    tables: {
      CUSTOMERS: universityDb.tables.CUSTOMERS,
      PRODUCTS: universityDb.tables.PRODUCTS,
      ORDERS: universityDb.tables.ORDERS,
      ORDERDETAILS: orderDetailsTable,
      ORDER_DETAILS: { ...orderDetailsTable, name: 'ORDER_DETAILS' }
    }
  };

  // --- 3. Library Database ---
  const libraryDb: DatabaseDef = {
    name: 'LibraryDB',
    tables: {
      BOOKS: {
        name: 'BOOKS',
        columns: [
          { name: 'ISBN', type: 'VARCHAR(20)', isNullable: false, isPrimaryKey: true, isIdentity: false },
          { name: 'TITLE', type: 'VARCHAR(100)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'AUTHOR', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'PUBLISHED_YEAR', type: 'INT', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { ISBN: '978-0132350884', TITLE: 'Clean Code', AUTHOR: 'Robert C. Martin', PUBLISHED_YEAR: 2008 },
          { ISBN: '978-0201633610', TITLE: 'Design Patterns', AUTHOR: 'Erich Gamma', PUBLISHED_YEAR: 1994 },
          { ISBN: '978-0321125217', TITLE: 'Domain-Driven Design', AUTHOR: 'Eric Evans', PUBLISHED_YEAR: 2003 }
        ],
        constraints: ['PK_BOOKS']
      },
      MEMBERS: {
        name: 'MEMBERS',
        columns: [
          { name: 'MEMBER_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'FULL_NAME', type: 'VARCHAR(50)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'JOIN_DATE', type: 'DATE', isNullable: false, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { MEMBER_ID: 1, FULL_NAME: 'John Doe', JOIN_DATE: '2022-01-15' },
          { MEMBER_ID: 2, FULL_NAME: 'Jane Smith', JOIN_DATE: '2023-05-20' }
        ],
        constraints: ['PK_MEMBERS']
      },
      LOANS: {
        name: 'LOANS',
        columns: [
          { name: 'LOAN_ID', type: 'INT', isNullable: false, isPrimaryKey: true, isIdentity: true },
          { name: 'ISBN', type: 'VARCHAR(20)', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'MEMBER_ID', type: 'INT', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'LOAN_DATE', type: 'DATE', isNullable: false, isPrimaryKey: false, isIdentity: false },
          { name: 'RETURN_DATE', type: 'DATE', isNullable: true, isPrimaryKey: false, isIdentity: false }
        ],
        rows: [
          { LOAN_ID: 1, ISBN: '978-0132350884', MEMBER_ID: 1, LOAN_DATE: '2023-10-01', RETURN_DATE: null },
          { LOAN_ID: 2, ISBN: '978-0201633610', MEMBER_ID: 2, LOAN_DATE: '2023-09-15', RETURN_DATE: '2023-09-30' }
        ],
        constraints: ['PK_LOANS']
      }
    }
  };

  return {
    databases: { 
      'UniversityDB': universityDb, 
      'ShopDB': shopDb, 
      'LibraryDB': libraryDb 
    },
    currentDb: 'UniversityDB',
    messages: [],
    rowsAffected: 0
  };
};

const getState = (): SystemState => {
  if (!globalState) {
    globalState = createInitialState();
  }
  return globalState;
};

export const resetDb = (): SqlResult => {
  globalState = createInitialState();
  return { 
    columns: [], 
    rows: [], 
    message: "System successfully reset.\nAll 3 databases (UniversityDB, ShopDB, LibraryDB) have been restored to their initial state.\n\nCompletion time: " + new Date().toLocaleTimeString()
  };
};

export const getDbSchema = () => {
  const state = getState();
  const db = state.databases[state.currentDb];
  const tableList = db ? Object.values(db.tables).map(t => ({
      name: t.name,
      columns: t.columns.map(c => ({ 
        name: c.name, 
        type: c.type,
        nullable: c.isNullable ? 'NULL' : 'NOT NULL',
        key: c.isPrimaryKey ? 'PK' : ''
      }))
    })) : [];
  
  return {
    currentDb: state.currentDb,
    availableDbs: Object.keys(state.databases).sort(),
    tables: tableList
  };
};

// ==================== HELPER FUNCTIONS ====================
const getTable = (state: SystemState, tableNameRaw: string): TableDef => {
  // Strip brackets and quotes for compatibility with various SQL styles
  const tableName = tableNameRaw.replace(/^\[|\]$/g, '').replace(/^['"]|['"]$/g, '');
  
  const db = state.databases[state.currentDb];
  if (!db) throw new Error(`Msg 911, Level 16, State 1\nDatabase '${state.currentDb}' does not exist or you do not have permission.`);
  
  const table = db.tables[tableName.toUpperCase()] || db.tables[tableName];
  if (!table) throw new Error(`Msg 208, Level 16, State 1\nInvalid object name '${tableNameRaw}'.`);
  
  return table;
};

const checkConstraints = (table: TableDef, row: any, isUpdate = false, oldRow: any = null) => {
  for (const col of table.columns) {
    const val = row[col.name];
    
    // NOT NULL constraint
    if (!col.isNullable && (val === null || val === undefined)) {
      throw new Error(
        `Msg 515, Level 16, State 2\n` +
        `Cannot insert the value NULL into column '${col.name}', table '${table.name}'; column does not allow nulls. ${isUpdate ? 'UPDATE' : 'INSERT'} fails.`
      );
    }

    // PRIMARY KEY constraint
    if (col.isPrimaryKey && val !== null && val !== undefined) {
      const duplicate = table.rows.find(r => r !== oldRow && r[col.name] === val);
      if (duplicate) {
        throw new Error(
          `Msg 2627, Level 14, State 1\n` +
          `Violation of PRIMARY KEY constraint 'PK_${table.name}_${col.name}'. Cannot insert duplicate key in object 'dbo.${table.name}'. The duplicate key value is (${val}).\n` +
          `The statement has been terminated.`
        );
      }
    }
  }
};

// Evaluate simple scalar expressions
const evaluateExpression = (row: any, expr: string): any => {
  if (!expr || expr.trim() === '') return null;
  expr = expr.trim();
  
  if (expr.toUpperCase() === 'NULL') return null;
  if ((expr.startsWith("'") && expr.endsWith("'")) || (expr.startsWith('"') && expr.endsWith('"'))) {
    return expr.slice(1, -1);
  }
  if (!isNaN(Number(expr))) return Number(expr);
  
  if (expr.toUpperCase().startsWith('GETDATE()')) return new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  // Functions
  const funcMatch = expr.match(/^(\w+)\((.*)\)$/);
  if (funcMatch) {
      const funcName = funcMatch[1].toUpperCase();
      const arg = funcMatch[2];
      const val = evaluateExpression(row, arg);
      
      if (funcName === 'UPPER') return typeof val === 'string' ? val.toUpperCase() : val;
      if (funcName === 'LOWER') return typeof val === 'string' ? val.toLowerCase() : val;
      if (funcName === 'LEN' || funcName === 'LENGTH') return String(val).length;
      if (funcName === 'ABS') return Math.abs(Number(val));
      if (funcName === 'ROUND') return Math.round(Number(val));
  }

  // Column resolution
  const colVal = (colName: string) => {
    if (!row) return undefined;
    if (row[colName] !== undefined) return row[colName];
    // Case insensitive match
    const key = Object.keys(row).find(k => k.toUpperCase() === colName.toUpperCase());
    if (key !== undefined) return row[key];
    // Table alias match
    const parts = colName.split('.');
    if (parts.length === 2) {
      const suffix = '.' + parts[1].toUpperCase();
      const k = Object.keys(row).find(rk => rk.toUpperCase().endsWith(suffix));
      if (k !== undefined) return row[k];
    }
    return undefined;
  };

  const directVal = colVal(expr);
  if (directVal !== undefined) return directVal;
  
  // Basic math (unsafe eval but necessary for mock)
  // Only allow numbers and operators
  if (/^[\d\s+\-*/().]+$/.test(expr)) {
    try {
      return eval(expr);
    } catch (e) {
      return null;
    }
  }
  
  return null;
};

// Evaluate logical conditions (WHERE/ON)
const evaluateCondition = (row: any, condition: string): boolean => {
  if (!condition) return true;
  
  // Normalize logical operators
  let jsExpr = condition
    .replace(/\s+AND\s+/gi, ' && ')
    .replace(/\s+OR\s+/gi, ' || ')
    .replace(/\s*=\s*/g, ' == ') // Use loose equality for string/number mix
    .replace(/\s*<>\s*/g, ' != ')
    .replace(/\s*!=\s*/g, ' != ');

  // Handle special SQL operators that aren't JS compatible directly
  
  // LIKE
  const likeRegex = /([a-zA-Z0-9_.]+)\s+LIKE\s+'([^']+)'/gi;
  jsExpr = jsExpr.replace(likeRegex, (_, col, pat) => {
      const val = evaluateExpression(row, col);
      const regexStr = '^' + pat.replace(/%/g, '.*').replace(/_/g, '.') + '$';
      return new RegExp(regexStr, 'i').test(String(val)) ? 'true' : 'false';
  });

  // IN
  const inRegex = /([a-zA-Z0-9_.]+)\s+IN\s*\(([^)]+)\)/gi;
  jsExpr = jsExpr.replace(inRegex, (_, col, vals) => {
      const val = evaluateExpression(row, col);
      const allowed = vals.split(',').map((v: string) => v.trim().replace(/^['"]|['"]$/g, ''));
      return allowed.includes(String(val)) ? 'true' : 'false';
  });

  // BETWEEN
  const betweenRegex = /([a-zA-Z0-9_.]+)\s+BETWEEN\s+([0-9.]+)\s+AND\s+([0-9.]+)/gi;
  jsExpr = jsExpr.replace(betweenRegex, (_, col, min, max) => {
      const val = Number(evaluateExpression(row, col));
      return (val >= Number(min) && val <= Number(max)) ? 'true' : 'false';
  });

  // IS NULL / IS NOT NULL
  const isNullRegex = /([a-zA-Z0-9_.]+)\s+IS\s+NULL/gi;
  jsExpr = jsExpr.replace(isNullRegex, (_, col) => {
      const val = evaluateExpression(row, col);
      return (val === null || val === undefined) ? 'true' : 'false';
  });
  
  const isNotNullRegex = /([a-zA-Z0-9_.]+)\s+IS\s+NOT\s+NULL/gi;
  jsExpr = jsExpr.replace(isNotNullRegex, (_, col) => {
      const val = evaluateExpression(row, col);
      return (val !== null && val !== undefined) ? 'true' : 'false';
  });

  // Replace Column Names with Values
  // We identify potential column names as tokens that are not keywords, numbers, or strings
  // Simple approach: replace any token that matches a key in row
  
  // To avoid replacing parts of strings (e.g. 'Name' == 'Name'), we temporarily mask strings
  const stringLiterals: string[] = [];
  jsExpr = jsExpr.replace(/'([^']*)'/g, (_, content) => {
      stringLiterals.push(content);
      return `__STR_${stringLiterals.length - 1}__`;
  });

  // Now safe to replace variables
  Object.keys(row).sort((a,b) => b.length - a.length).forEach(key => {
      // Look for whole words match (case insensitive in SQL but keys are usually strict or we check variants)
      // Since row keys might be "STUDENTS.NAME" or "NAME", we try to match them.
      let val = row[key];
      if (typeof val === 'string') val = `"${val}"`; // Quote strings for JS eval
      if (val === null) val = 'null';
      if (val === undefined) val = 'undefined';
      
      // Escape key for regex
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKey}\\b`, 'gi');
      jsExpr = jsExpr.replace(regex, String(val));
  });

  // Restore strings
  jsExpr = jsExpr.replace(/__STR_(\d+)__/g, (_, idx) => {
      return `"${stringLiterals[Number(idx)]}"`;
  });

  try {
    return eval(jsExpr);
  } catch (e) {
    // If eval fails, it might be due to complex unhandled syntax. Default to false or throw?
    // For mock, returning false is safer to avoid crash loops, but throwing helps debug.
    console.error("Condition eval failed:", condition, jsExpr, e);
    return false;
  }
};

const aggregateRows = (rows: any[], func: string, colExpr: string) => {
  const getVal = (r: any) => {
    if (colExpr === '*') return 1;
    let val = evaluateExpression(r, colExpr);
    return val;
  };

  const validValues = rows.map(r => getVal(r)).filter(v => v !== null && v !== undefined);

  switch (func.toUpperCase()) {
    case 'COUNT': return validValues.length;
    case 'SUM': return validValues.reduce((a, b) => Number(a) + Number(b), 0);
    case 'AVG': {
      if (validValues.length === 0) return null;
      const sum = validValues.reduce((a, b) => Number(a) + Number(b), 0);
      return sum / validValues.length;
    }
    case 'MAX': return validValues.length ? validValues.reduce((a, b) => (a > b ? a : b)) : null;
    case 'MIN': return validValues.length ? validValues.reduce((a, b) => (a < b ? a : b)) : null;
    default: return null;
  }
};

// ==================== QUERY PARSING & EXECUTION ====================

// Manual parser for SELECT to handle clauses in any order (though standard SQL has order) and robustness
const parseSelect = (stmt: string) => {
    // Basic extraction logic looking for keywords
    // Normalize spaces
    const s = stmt.replace(/\s+/g, ' ').trim();
    
    // Helper to find keyword index ignoring those in quotes
    const findKeyword = (str: string, kw: string) => {
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        const match = regex.exec(str);
        return match ? match.index : -1;
    };

    // Extract clauses
    const clauses: Record<string, string> = {};
    const keywords = ['SELECT', 'FROM', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'];
    
    // Map keywords to their positions
    const positions = keywords.map(k => ({ kw: k, idx: findKeyword(s, k) })).filter(p => p.idx !== -1).sort((a, b) => a.idx - b.idx);
    
    for (let i = 0; i < positions.length; i++) {
        const current = positions[i];
        const next = positions[i+1];
        const content = s.substring(current.idx + current.kw.length, next ? next.idx : undefined).trim();
        clauses[current.kw] = content;
    }

    if (!clauses['SELECT']) throw new Error("Invalid SELECT statement.");

    return {
        selectList: clauses['SELECT'],
        fromClause: clauses['FROM'],
        whereClause: clauses['WHERE'],
        groupByClause: clauses['GROUP BY'],
        havingClause: clauses['HAVING'],
        orderByClause: clauses['ORDER BY']
    };
};

export const executeMockSql = (query: string): SqlResult => {
  const state = getState();
  state.messages = [];
  state.rowsAffected = 0;
  
  let lastResult: SqlResult | null = null;
  const startTime = Date.now();

  const cleanQuery = query
    .replace(/--.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim();
  
  if (!cleanQuery) {
    return { columns: [], rows: [], message: "Command(s) completed successfully." };
  }

  // Improved statement splitter that respects quotes and brackets
  const statements: string[] = [];
  let currentStmt = '';
  let inQuote = false;
  let quoteChar = '';
  
  for (let i = 0; i < cleanQuery.length; i++) {
    const char = cleanQuery[i];
    if ((char === "'" || char === '"') && (i === 0 || cleanQuery[i-1] !== '\\')) {
        if (!inQuote) {
            inQuote = true;
            quoteChar = char;
        } else if (char === quoteChar) {
            inQuote = false;
        }
    }
    
    if (char === ';' && !inQuote) {
      if (currentStmt.trim()) statements.push(currentStmt.trim());
      currentStmt = '';
    } else {
      currentStmt += char;
    }
  }
  if (currentStmt.trim()) statements.push(currentStmt.trim());

  try {
    for (const stmt of statements) {
      const upperStmt = stmt.toUpperCase().trim();
      
      // ========== USE DATABASE ==========
      if (upperStmt.startsWith('USE ')) {
        const dbName = stmt.trim().split(/\s+/)[1].replace(/[;[\]]/g, '');
        const targetDb = Object.keys(state.databases).find(d => d.toUpperCase() === dbName.toUpperCase());
        
        if (!targetDb) {
          throw new Error(`Msg 911, Level 16, State 1\nDatabase '${dbName}' does not exist or you do not have permission.`);
        }
        state.currentDb = targetDb;
        state.messages.push(`Changed database context to '${targetDb}'.`);
      }
      
      // ========== CREATE DATABASE ==========
      else if (upperStmt.startsWith('CREATE DATABASE ')) {
        const dbName = stmt.trim().split(/\s+/)[2].replace(/[;[\]]/g, '');
        if (state.databases[dbName]) {
          throw new Error(`Msg 1801, Level 16, State 1\nDatabase '${dbName}' already exists. Choose a different database name.`);
        }
        state.databases[dbName] = { name: dbName, tables: {} };
        state.messages.push(`Database '${dbName}' created successfully.`);
      }

      // ========== DROP DATABASE ==========
      else if (upperStmt.startsWith('DROP DATABASE ')) {
        const dbName = stmt.trim().split(/\s+/)[2].replace(/[;[\]]/g, '');
        if (!state.databases[dbName]) {
          throw new Error(`Msg 3701, Level 16, State 1\nCannot drop the database '${dbName}', because it does not exist or you do not have permission.`);
        }
        delete state.databases[dbName];
        if (state.currentDb === dbName) state.currentDb = Object.keys(state.databases)[0] || 'master';
        state.messages.push(`Database '${dbName}' dropped successfully.`);
      }

      // ========== CREATE TABLE ==========
      else if (upperStmt.startsWith('CREATE TABLE ')) {
        const match = stmt.match(/CREATE\s+TABLE\s+(\w+)\s*\(([\s\S]+)\)/i);
        if (!match) throw new Error(`Msg 102, Level 15, State 1\nIncorrect syntax near 'CREATE TABLE'.`);
        
        const tableName = match[1].toUpperCase();
        const defsStr = match[2];
        
        const db = state.databases[state.currentDb];
        if (db.tables[tableName]) {
          throw new Error(`Msg 2714, Level 16, State 6\nThere is already an object named '${tableName}' in the database.`);
        }

        const colDefsRaw: string[] = [];
        let pDepth = 0;
        let buff = '';
        for (const c of defsStr) {
          if (c === '(') pDepth++;
          if (c === ')') pDepth--;
          if (c === ',' && pDepth === 0) {
            colDefsRaw.push(buff.trim());
            buff = '';
          } else {
            buff += c;
          }
        }
        if (buff.trim()) colDefsRaw.push(buff.trim());

        const columns: ColumnDef[] = [];
        let primaryKeys: string[] = [];

        colDefsRaw.forEach(def => {
          const parts = def.trim().split(/\s+/);
          const name = parts[0].toUpperCase();
          const type = parts[1];
          const rest = parts.slice(2).join(' ').toUpperCase();

          if (name === 'PRIMARY' && type.toUpperCase() === 'KEY') {
            const pkMatch = def.match(/\((.+)\)/);
            if (pkMatch) {
              primaryKeys = pkMatch[1].split(',').map(s => s.trim().toUpperCase());
            }
            return;
          }

          const col: ColumnDef = {
            name: name,
            type: type,
            isNullable: !rest.includes('NOT NULL'),
            isPrimaryKey: rest.includes('PRIMARY KEY'),
            isIdentity: rest.includes('IDENTITY'),
            defaultValue: rest.includes('DEFAULT') ? rest.match(/DEFAULT\s+('?[^']+'?|\d+)/)?.[1].replace(/'/g, '') : undefined
          };
          
          columns.push(col);
        });

        if (primaryKeys.length > 0) {
          columns.forEach(c => {
            if (primaryKeys.includes(c.name)) c.isPrimaryKey = true;
          });
        }

        db.tables[tableName] = { 
          name: tableName, 
          columns, 
          rows: [], 
          constraints: [`PK_${tableName}`] 
        };
        state.messages.push(`Table '${tableName}' created successfully.`);
      }

      // ========== DROP TABLE ==========
      else if (upperStmt.startsWith('DROP TABLE ')) {
        const tableName = stmt.trim().split(/\s+/)[2].toUpperCase();
        const db = state.databases[state.currentDb];
        if (!db.tables[tableName]) {
          throw new Error(`Msg 3701, Level 11, State 5\nCannot drop the table '${tableName}', because it does not exist or you do not have permission.`);
        }
        delete db.tables[tableName];
        state.messages.push(`Table '${tableName}' dropped successfully.`);
      }

      // ========== ALTER TABLE ==========
      else if (upperStmt.startsWith('ALTER TABLE ')) {
        const parts = stmt.trim().split(/\s+/);
        const tableName = parts[2].toUpperCase();
        const action = parts[3].toUpperCase(); // ADD, DROP, ALTER
        const table = getTable(state, tableName);

        if (action === 'ADD') {
            const colName = parts[4].toUpperCase();
            const type = parts[5];
            // Check if column exists
            if (table.columns.find(c => c.name === colName)) {
                throw new Error(`Msg 2705, Level 16, State 4\nColumn names in each table must be unique. Column name '${colName}' in table '${tableName}' is specified more than once.`);
            }
            // Basic Add
            table.columns.push({
                name: colName,
                type: type || 'VARCHAR(50)',
                isNullable: true, // Default to null for new columns on existing data
                isPrimaryKey: false,
                isIdentity: false
            });
            // Update rows
            table.rows.forEach(r => r[colName] = null);
            state.messages.push(`Column '${colName}' added to table '${tableName}'.`);
        } else if (action === 'DROP') {
            const subAction = parts[4].toUpperCase();
            if (subAction === 'COLUMN') {
                const colName = parts[5].toUpperCase();
                const colIdx = table.columns.findIndex(c => c.name === colName);
                if (colIdx === -1) {
                    throw new Error(`Msg 4924, Level 16, State 1\nALTER TABLE DROP COLUMN failed because column '${colName}' does not exist in table '${tableName}'.`);
                }
                table.columns.splice(colIdx, 1);
                table.rows.forEach(r => delete r[colName]);
                state.messages.push(`Column '${colName}' dropped from table '${tableName}'.`);
            } else if (subAction === 'CONSTRAINT') {
                const constName = parts[5];
                // Mock behavior
                state.messages.push(`Constraint '${constName}' dropped.`);
            }
        } else if (action === 'ALTER') {
             // ALTER COLUMN
             if (parts[4].toUpperCase() === 'COLUMN') {
                 const colName = parts[5].toUpperCase();
                 const type = parts[6];
                 const col = table.columns.find(c => c.name === colName);
                 if (col) {
                     col.type = type;
                     state.messages.push(`Column '${colName}' altered.`);
                 }
             }
        }
      }

      // ========== TRUNCATE TABLE ==========
      else if (upperStmt.startsWith('TRUNCATE TABLE ')) {
        const tableName = stmt.trim().split(/\s+/)[2].toUpperCase();
        const table = getTable(state, tableName);
        const count = table.rows.length;
        table.rows = [];
        state.messages.push(`Table '${tableName}' truncated. ${count} rows removed.`);
      }

      // ========== INSERT ==========
      else if (upperStmt.startsWith('INSERT ')) {
        // Two forms: INSERT INTO ... VALUES ... OR INSERT INTO ... SELECT ...
        const isSelectInsert = upperStmt.includes(' SELECT ');
        
        if (isSelectInsert) {
            const splitPoint = stmt.toUpperCase().indexOf(' SELECT ');
            const insertPart = stmt.substring(0, splitPoint).trim();
            const selectPart = stmt.substring(splitPoint).trim();
            
            const insertMatch = insertPart.match(/INSERT\s+(?:INTO\s+)?(\w+)(?:\s*\(([^)]+)\))?/i);
            if (!insertMatch) throw new Error("Invalid INSERT Syntax");
            
            const tableName = insertMatch[1].toUpperCase();
            const colsStr = insertMatch[2];
            const table = getTable(state, tableName);
            
            const targetCols = colsStr 
                ? colsStr.split(',').map(s => s.trim().toUpperCase()) 
                : table.columns.filter(c => !c.isIdentity).map(c => c.name); // If no cols specified, default to all non-identity

            // Run SELECT
            const selectResult = executeMockSql(selectPart); // Recursive call for the SELECT part
            if (!selectResult || !selectResult.rows) throw new Error("SELECT statement in INSERT failed.");
            
            let count = 0;
            selectResult.rows.forEach((sourceRow: any[]) => {
                const newRow: any = {};
                targetCols.forEach((colName, idx) => {
                    newRow[colName] = sourceRow[idx];
                });
                
                // Handle Identity/Defaults
                table.columns.forEach(col => {
                    if (newRow[col.name] === undefined) {
                        if (col.isIdentity) {
                            const max = table.rows.reduce((m, r) => Math.max(m, r[col.name] || 0), 0);
                            newRow[col.name] = max + 1;
                        } else {
                            newRow[col.name] = col.defaultValue ?? null;
                        }
                    }
                });
                
                checkConstraints(table, newRow);
                table.rows.push(newRow);
                count++;
            });
            state.rowsAffected = count;
            state.messages.push(`(${count} row${count !== 1 ? 's' : ''} affected)`);

        } else {
            // VALUES format
            const insertMatch = stmt.match(/INSERT\s+(?:INTO\s+)?(\w+)(?:\s*\(([^)]+)\))?\s*VALUES\s*\(([^)]+)\)/i);
            if (!insertMatch) throw new Error(`Msg 102, Level 15, State 1\nIncorrect syntax near 'INSERT'.`);
            
            const tableName = insertMatch[1].toUpperCase();
            const colsStr = insertMatch[2];
            const valuesStr = insertMatch[3];

            const table = getTable(state, tableName);
            
            const values = valuesStr.split(/,(?=(?:(?:[^']*'){2})*[^']*$)/).map(v => v.trim());
            const targetCols = colsStr 
            ? colsStr.split(',').map(s => s.trim().toUpperCase()) 
            : table.columns.filter(c => !c.isIdentity).map(c => c.name); // Implicit column list excludes identity in SQL Server unless IDENTITY_INSERT ON
            
            // Note: In strict SQL, if columns aren't listed, you must supply values for ALL columns (even identity). 
            // But for this mock, we'll be lenient: if count matches non-identity columns, assume identity is skipped.
            // If count matches ALL columns, allow it.
            
            if (values.length !== targetCols.length) {
                // If implicit, maybe user provided ID?
                if (!colsStr && values.length === table.columns.length) {
                    // They provided everything, including identity
                } else {
                    throw new Error(`Msg 213, Level 16, State 1\nColumn name or number of supplied values does not match table definition.`);
                }
            }

            const newRow: any = {};
            // If explicit columns provided
            if (colsStr) {
                targetCols.forEach((colName, idx) => {
                    newRow[colName] = evaluateExpression({}, values[idx]);
                });
            } else {
                // Implicit
                if (values.length === table.columns.length) {
                    table.columns.forEach((col, idx) => {
                        newRow[col.name] = evaluateExpression({}, values[idx]);
                    });
                } else {
                    // Assume non-identity
                    let valIdx = 0;
                    table.columns.forEach(col => {
                        if (!col.isIdentity) {
                            newRow[col.name] = evaluateExpression({}, values[valIdx++]);
                        }
                    });
                }
            }
            
            // Handle defaults and identity generation if missing
            table.columns.forEach(col => {
            if (newRow[col.name] === undefined || newRow[col.name] === null) {
                if (col.isIdentity && !newRow[col.name]) {
                    const max = table.rows.reduce((m, r) => Math.max(m, r[col.name] || 0), 0);
                    newRow[col.name] = max + 1;
                } else if (col.defaultValue && newRow[col.name] === undefined) {
                    newRow[col.name] = evaluateExpression({}, col.defaultValue);
                } else if (!col.isIdentity) {
                    newRow[col.name] = null;
                }
            }
            });

            checkConstraints(table, newRow);
            table.rows.push(newRow);
            
            state.rowsAffected = 1;
            state.messages.push(`(1 row affected)`);
        }
      }

      // ========== UPDATE ==========
      else if (upperStmt.startsWith('UPDATE ')) {
        const match = stmt.match(/UPDATE\s+(\w+)\s+SET\s+([\s\S]+?)(?:\s+WHERE\s+([\s\S]+))?$/i);
        if (!match) throw new Error(`Msg 102, Level 15, State 1\nIncorrect syntax near 'UPDATE'.`);
        
        const tableName = match[1].toUpperCase();
        const setStr = match[2];
        const whereStr = match[3];
        
        const table = getTable(state, tableName);
        
        const updates = setStr.split(',').map(s => {
          const [colPart, valPart] = s.split('=');
          return { col: colPart.trim().toUpperCase(), valExpr: valPart.trim() };
        });

        let count = 0;
        table.rows.forEach(row => {
          if (!whereStr || evaluateCondition(row, whereStr)) {
            const oldRow = { ...row };
            updates.forEach(u => {
                row[u.col] = evaluateExpression(row, u.valExpr);
            });
            try {
              checkConstraints(table, row, true, oldRow);
              count++;
            } catch (e) {
              Object.assign(row, oldRow);
              throw e;
            }
          }
        });
        
        state.rowsAffected = count;
        state.messages.push(`(${count} row${count !== 1 ? 's' : ''} affected)`);
      }

      // ========== DELETE ==========
      else if (upperStmt.startsWith('DELETE ')) {
        // Supports DELETE FROM T WHERE ... or DELETE T WHERE ...
        const match = stmt.match(/DELETE\s+(?:FROM\s+)?(\w+)(?:\s+WHERE\s+([\s\S]+))?$/i);
        if (!match) throw new Error(`Msg 102, Level 15, State 1\nIncorrect syntax near 'DELETE'.`);
        
        const tableName = match[1].toUpperCase();
        const whereStr = match[2];
        const table = getTable(state, tableName);
        
        const initialCount = table.rows.length;
        if (whereStr) {
          table.rows = table.rows.filter(r => !evaluateCondition(r, whereStr));
        } else {
          table.rows = [];
        }
        
        const deleted = initialCount - table.rows.length;
        state.rowsAffected = deleted;
        state.messages.push(`(${deleted} row${deleted !== 1 ? 's' : ''} affected)`);
      }

      // ========== SELECT ==========
      else if (upperStmt.startsWith('SELECT ')) {
        const { selectList, fromClause, whereClause, groupByClause, orderByClause } = parseSelect(stmt);
        
        // 1. Handle FROM & JOINs
        let workingSet: any[] = [];
        
        if (fromClause) {
            const joinRegex = /(\w+)(?:\s+(?:AS\s+)?(\w+))?(?:\s+(INNER|LEFT|RIGHT|FULL|CROSS)\s+JOIN\s+(\w+)(?:\s+(?:AS\s+)?(\w+))?(?:\s+ON\s+([\s\S]+?))?)?/gi;
            // A simple parser for single join. For multiple joins, we'd need a loop. 
            // Mock assumption: supports 1 join or simple table.
            
            const joinMatch = fromClause.match(/(\w+)(?:\s+(?:AS\s+)?(\w+))?\s+(INNER|LEFT|RIGHT|FULL|CROSS)\s+JOIN\s+(\w+)(?:\s+(?:AS\s+)?(\w+))?(?:\s+ON\s+([\s\S]+))?/i);
            
            if (joinMatch) {
                const t1Name = joinMatch[1].toUpperCase();
                const t1Alias = joinMatch[2] || t1Name;
                const joinType = joinMatch[3].toUpperCase();
                const t2Name = joinMatch[4].toUpperCase();
                const t2Alias = joinMatch[5] || t2Name;
                const onCondition = joinMatch[6];
                
                const t1 = getTable(state, t1Name);
                const t2 = getTable(state, t2Name);

                const result = [];
                for (const r1 of t1.rows) {
                    let matchFound = false;
                    for (const r2 of t2.rows) {
                        const merged: any = {};
                        // Prefix columns
                        Object.keys(r1).forEach(k => { merged[k] = r1[k]; merged[`${t1Alias}.${k}`.toUpperCase()] = r1[k]; });
                        Object.keys(r2).forEach(k => { merged[k] = r2[k]; merged[`${t2Alias}.${k}`.toUpperCase()] = r2[k]; });
                        
                        let isMatch = joinType === 'CROSS' ? true : evaluateCondition(merged, onCondition);
                        if (isMatch) {
                            result.push(merged);
                            matchFound = true;
                        }
                    }
                    
                    if (!matchFound && (joinType === 'LEFT' || joinType === 'FULL')) {
                        const merged: any = {};
                        Object.keys(r1).forEach(k => { merged[k] = r1[k]; merged[`${t1Alias}.${k}`.toUpperCase()] = r1[k]; });
                        t2.columns.forEach(c => { merged[c.name] = null; merged[`${t2Alias}.${c.name}`.toUpperCase()] = null; });
                        result.push(merged);
                    }
                }
                
                if (joinType === 'RIGHT' || joinType === 'FULL') {
                     // Add unmatched right rows logic (simplified: omitted for brevity in mock unless critical)
                }
                workingSet = result;
            } else {
                // Single Table
                const parts = fromClause.trim().split(/\s+/);
                const tName = parts[0].toUpperCase();
                const alias = parts.length > 1 && parts[1].toUpperCase() !== 'WHERE' ? parts[parts.length - 1] : tName;
                // Special check for 'sys.tables' mock
                if (tName === 'SYS.TABLES') {
                    const db = state.databases[state.currentDb];
                    const rows = Object.values(db.tables).map(t => ({ name: t.name, object_id: Math.floor(Math.random() * 10000) }));
                    workingSet = rows;
                } else {
                    const table = getTable(state, tName);
                    workingSet = table.rows.map(r => {
                        const newR: any = { ...r };
                        Object.keys(r).forEach(k => newR[`${alias}.${k}`.toUpperCase()] = r[k]);
                        return newR;
                    });
                }
            }
        } else {
            // No FROM (e.g. SELECT 1, SELECT GETDATE())
            workingSet = [{}];
        }

        // 2. WHERE
        if (whereClause) {
            workingSet = workingSet.filter(r => evaluateCondition(r, whereClause));
        }

        // 3. GROUP BY & Aggregation
        let finalRows = [];
        const hasAgg = /COUNT|SUM|AVG|MAX|MIN/i.test(selectList);
        
        if (groupByClause || hasAgg) {
            const buckets: Record<string, any[]> = {};
            if (groupByClause) {
                workingSet.forEach(r => {
                    const keys = groupByClause.split(',').map(k => k.trim());
                    const keyVal = keys.map(k => {
                        const val = evaluateExpression(r, k);
                        return val !== null ? val : 'NULL';
                    }).join('|');
                    if (!buckets[keyVal]) buckets[keyVal] = [];
                    buckets[keyVal].push(r);
                });
            } else {
                buckets['ALL'] = workingSet;
            }
            
            for (const key in buckets) {
                const rows = buckets[key];
                const first = rows[0] || {};
                const newRow: any = {};
                // Very simple split respecting commas inside parens is hard, assuming simple agg functions
                const cols = selectList.split(/,(?![^(]*\))/).map(s => s.trim());
                
                cols.forEach((colExpr) => {
                    const aliasMatch = colExpr.match(/(.+)\s+AS\s+(\w+)$/i);
                    const expr = aliasMatch ? aliasMatch[1].trim() : colExpr;
                    const alias = aliasMatch ? aliasMatch[2] : expr; // Simplified alias
                    
                    const aggMatch = expr.match(/(COUNT|SUM|AVG|MAX|MIN)\s*\((.+)\)/i);
                    if (aggMatch) {
                        const aggVal = aggregateRows(rows, aggMatch[1], aggMatch[2]);
                        newRow[alias] = aggVal;
                    } else {
                        newRow[alias] = evaluateExpression(first, expr);
                    }
                });
                finalRows.push(newRow);
            }
        } else {
            // Simple SELECT
            finalRows = workingSet.map(r => {
                const newRow: any = {};
                if (selectList.trim() === '*') {
                    // Filter out dotted keys for *
                    Object.keys(r).filter(k => !k.includes('.')).forEach(k => newRow[k] = r[k]);
                    return newRow;
                }
                
                const cols = selectList.split(/,(?![^(]*\))/).map(s => s.trim());
                cols.forEach(colExpr => {
                    const aliasMatch = colExpr.match(/(.+)\s+AS\s+(\w+)$/i);
                    const expr = aliasMatch ? aliasMatch[1].trim() : colExpr;
                    const alias = aliasMatch ? aliasMatch[2] : expr.split('.').pop()!;
                    newRow[alias] = evaluateExpression(r, expr);
                });
                return newRow;
            });
        }

        // 4. DISTINCT
        const distinctMatch = selectList.match(/^DISTINCT\s+/i);
        if (distinctMatch) {
             const unique = new Set();
             finalRows = finalRows.filter(r => {
                 const sig = JSON.stringify(r);
                 if (unique.has(sig)) return false;
                 unique.add(sig);
                 return true;
             });
        }

        // 5. TOP
        const topMatch = selectList.match(/^TOP\s+(\d+)/i);
        if (topMatch) {
            const limit = parseInt(topMatch[1]);
            finalRows = finalRows.slice(0, limit);
        }

        // 6. ORDER BY
        if (orderByClause) {
            const orderParts = orderByClause.split(',').map(p => {
                const parts = p.trim().split(/\s+/);
                return {
                    col: parts[0],
                    dir: parts[1] && parts[1].toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
                };
            });
            finalRows.sort((a, b) => {
                for (const part of orderParts) {
                    const va = a[part.col] !== undefined ? a[part.col] : evaluateExpression(a, part.col);
                    const vb = b[part.col] !== undefined ? b[part.col] : evaluateExpression(b, part.col);
                    if (va < vb) return part.dir === 'DESC' ? 1 : -1;
                    if (va > vb) return part.dir === 'DESC' ? -1 : 1;
                }
                return 0;
            });
        }

        const columns = finalRows.length > 0 ? Object.keys(finalRows[0]) : [];
        const rows = finalRows.map(r => Object.values(r));
        
        state.rowsAffected = rows.length;
        lastResult = { columns, rows, message: `\n(${rows.length} row${rows.length !== 1 ? 's' : ''} affected)` };
      }
      // ========== SP_HELP / SHOW TABLES ==========
      else if (upperStmt.startsWith('SP_HELP') || upperStmt.startsWith('EXEC SP_HELP') || upperStmt.startsWith('SHOW TABLES')) {
        const match = stmt.match(/SP_HELP\s+(\w+)/i);
        if (match) {
          const tableName = match[1].toUpperCase();
          const table = getTable(state, tableName);
          const columns = ['Column_name', 'Type', 'Nullable', 'Key'];
          const rows = table.columns.map(c => [
            c.name,
            c.type,
            c.isNullable ? 'yes' : 'no',
            c.isPrimaryKey ? 'PK' : ''
          ]);
          lastResult = { columns, rows, message: `\nTable: ${tableName}` };
        } else {
            // List all tables
            const db = state.databases[state.currentDb];
            const columns = ['TABLE_NAME', 'TABLE_TYPE'];
            // Filter duplicates (aliases)
            const seen = new Set();
            const rows = Object.values(db.tables)
                .filter(t => {
                    if (seen.has(t.name)) return false;
                    seen.add(t.name);
                    return true;
                })
                .map(t => [t.name, 'BASE TABLE']);
            lastResult = { columns, rows, message: `Found ${rows.length} tables in ${state.currentDb}` };
        }
      }
      // ========== DCL COMMANDS (Mock) ==========
      else if (/^(GRANT|REVOKE|DENY)\s+/i.test(stmt)) {
         state.messages.push("Command(s) completed successfully. (Mock: Security settings updated)");
      }
      
      // ========== TCL COMMANDS (Mock) ==========
      else if (/^(COMMIT|ROLLBACK|SAVEPOINT|BEGIN\s+TRAN|BEGIN\s+TRANSACTION)\b/i.test(stmt)) {
         state.messages.push("Command(s) completed successfully. (Mock: Transaction handled)");
      }
      else {
          throw new Error(`Msg 102, Level 15, State 1\nIncorrect syntax near '${stmt.split(' ')[0]}'. Command not supported in this emulator.`);
      }
    }
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(3);
    
    if (lastResult) {
      lastResult.message = (lastResult.message || '') + `\n\nCompletion time: ${duration}s`;
      return lastResult;
    }
    
    return { columns: [], rows: [], message: state.messages.join('\n') + `\n\nCompletion time: ${duration}s` };

  } catch (err: any) {
    console.error(err);
    return { columns: [], rows: [], error: `${err.message}\n\nThe statement has been terminated.` };
  }
};
