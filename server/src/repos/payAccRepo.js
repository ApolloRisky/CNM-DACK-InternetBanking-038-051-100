var db = require("../fn/mysql-db");

exports.add = payAccEntity => {
  const {
    id,
    customerId,
    clientEmail,
    clientName,
    accNumber,
    balance,
    createdAt
  } = payAccEntity;

  const sql =
    "insert into `payAcc`(`id`, `customerId`, `clientEmail`, `clientName`, `accNumber`, `balance`, `createdAt`)" +
    `values('${id}', '${customerId}', '${clientEmail}','${clientName}','${accNumber}','${balance}', '${createdAt}');`;
  return db.save(sql);
};

exports.loadAll = () => {
  var sql = `select * from payAcc`;
  return db.load(sql);
};

exports.loadByCustomerId = customerId => {
  var sql = `select * from payacc where customerId = '${customerId}'`;
  return db.load(sql);
};

exports.UpdateBalanceById = payAccEntity => {
  const { payAccId, newBalance } = payAccEntity;
  var sql =
    "update payacc set balance = " +
    `'${newBalance}'` +
    " where id=" +
    `'${payAccId}';`;
  return db.save(sql);
};
