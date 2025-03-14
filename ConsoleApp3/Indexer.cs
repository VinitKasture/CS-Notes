using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Student
    {
        public string Name { get; set; }

        private int[] RolNo = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        public int this[int i]
        {
            get {return this.RolNo[i];}
            set {this.RolNo[i] = value;}
        }
    }
}
