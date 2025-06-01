using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public class BankAccount
    {
        private double balance;

        public int newBalance { get { return newBalance; } set {
                if (value >= 0) newBalance = value;
            } }

        public void Deposit(double amount)
        {
            if (amount > 0)
                balance += amount;
        }

        public double GetBalance()
        {
            return balance;
        }

        public int age;
    }

}
