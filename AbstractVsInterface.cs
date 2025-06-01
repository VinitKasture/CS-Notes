using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public abstract class Animal
    {
        public abstract int noOfLegs { get; set; }
        public abstract void MakeSound();



        public void Eat()
        {
            Console.WriteLine("Animal is eating");
        }

        public Animal()
        {
            Console.WriteLine("Animal Constructor");
        }
    }

    public class Dog : Animal
    {
        public override int noOfLegs { get; set; }

        public Dog(int NoOfLegs)
        {
            noOfLegs = NoOfLegs;
        }

        public void GetInfo()
        {
            Console.WriteLine("Dog");
        }

        public override void MakeSound()
        {
            Console.WriteLine("Dog barks");
        }


        public Dog()
        {
            Console.WriteLine("Dog Constructor");
        }

    }
}
