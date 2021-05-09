export interface Transaction {
  id: number,
  source: string,
  target: string,
  amount: number,
  description: string
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 * 
 * This is how a transaction looks like.
 * 
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 * 
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *  
 * 
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(
  transactions: Transaction[]
): Transaction[] {
  // TODO
  // This has been done just to make the test pass for now.

  let newArray: any = transactions.map(function (transaction) {
    const { id, ...newObj } = transaction
    let result = new Object;
    result[transaction.id] = JSON.stringify(newObj);
    return result;
  });

  function match(obj1, obj2) {
    return Object.values(obj1)[0] === Object.values(obj2)[0];
  }

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (i !== j && match(newArray[i], newArray[j])) {
        newArray[i]["IsDuplicate"] = true;
        newArray[j]["IsDuplicate"] = true;
      }
    }
  }

  var duplicatesArr = newArray.filter(x => x.IsDuplicate).map(function (transaction) {
    return transactions.find(y => y.id === JSON.parse(Object.keys(transaction)[0]))
  })

  return duplicatesArr;
}

let transactionsArr = [
  {
    id: 1,
    source: 'A',
    target: 'B',
    amount: 300,
    description: 'tikkie'
  },
  {
    id: 7,
    source: 'c',
    target: 'B',
    amount: 300,
    description: 'tikkie'
  },
  {
    id: 3,
    source: 'A',
    target: 'B',
    amount: 300,
    description: 'tikkie'
  },
  {
    id: 4,
    source: 'c',
    target: 'B',
    amount: 300,
    description: 'tikkie'
  },
  {
    id: 5,
    source: 'A',
    target: 'B',
    amount: 300,
    description: 'tikkie'
  },
  {
    id: 8,
    source: 'A',
    target: 'E',
    amount: 300,
    description: 'tikkie'
  },
  {
    id: 9,
    source: 'A',
    target: 'B',
    amount: 305,
    description: 'tikkie'
  }
];
findDuplicateTransactions(transactionsArr);