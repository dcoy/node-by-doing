let getUser = (id, cb) => {
  let user = {
    id: id,
    name: 'David'
  };
  setTimeout(() => {
    cb(user);
  }, 3000);
};

getUser(123, (user) => {
  console.log(user);
});