Meteor.startup(() => {
  // Define user roles
  const roles = ['admin', 'borrower', 'lender'];

  // Create a new user
  Accounts.createUser({
    email: 'user@example.com',
    password: 'password',
    profile: {
      role: 'borrower'
    }
  });

  // Assign a role to a user
  Roles.addUsersToRoles('userId', 'role');

  // Create a new loan request
  Loans.insert({
    amount: 1000,
    interestRate: 10,
    term: 12,
    borrowerId: 'borrowerId'
  });

  // Update the status of a loan
  Loans.update('loanId', {
    $set: {
      status: 'paid'
    }
  });
});