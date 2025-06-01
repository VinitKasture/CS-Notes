using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    public class StudentEnc
    {
        private string name;
        private int rollNo;
        private int[] marks = new int[5];
        private double percentage;

        public StudentEnc(string name, int rollNo)
        {
            this.name = name;
            this.rollNo = rollNo;
        }

        public int RollNo { get => rollNo; private set { UpdateRollNo(value); } }

        public void UpdateRollNo(int rollNo)
        {
            if(rollNo < 0) throw new ArgumentOutOfRangeException("Roll no is invalid");
            this.rollNo = rollNo;
        }

        public double GetPercentage()
        {
            this.percentage = 0;
            foreach (var item in marks)
            {
                this.percentage += item;
            }
            this.percentage = this.percentage / 5;
            return this.percentage;
        }

        public void setMarks(int[] marks)
        {
            if (marks.Length != 5) throw new ArgumentOutOfRangeException("Marks should contain 5 subjects only");

            for(int i = 0; i < marks.Length; i++)
            {
                if (marks[i] < 0 || marks[i] > 100) throw new ArgumentOutOfRangeException("Invalid marks " + marks[i]);
                this.marks[i] = marks[i];
            }
        }
    }

    public abstract class VehicleAbs
    {
        public string Brand { get; set; }
        public string Model { get; set; }

        public abstract void Start();

        public abstract void Stop();

        public abstract void PlayMusic();
    }

    public class Car : VehicleAbs
    {
        public int Name { get; set; }
        public int NoOFDoors { get; set; }

        public override void Start()
        {
            Console.WriteLine($@"The car is starting...");
        }

        public override void Stop()
        {
            Console.WriteLine("The car has stopped");
        }

        public override void PlayMusic()
        {
            Console.WriteLine("Now playing a song");
        }
    }



    public class ParentPoly
    {
        //public virtual void test()
        //{
        //    Console.WriteLine("Parent test");
        //}

        //public void test1()
        //{
        //    Console.WriteLine("Parent test1");
        //}

        static ParentPoly()
        {
            Console.WriteLine("Parent static constructor called");
        }
        public void overLoading()
        {
            Console.WriteLine("Parent method overloading");
        }
        
        public void overLoading(int a)
        {
            Console.WriteLine("Parent method overloading with int");
        }
    }

    interface iTest
    {
        void test(int a);
    }

 

    public class Child  
    {
        //public override void test()
        //{
        //    Console.WriteLine("Child test");
        //}

        static Child()
        {
            Console.WriteLine("Child static constructor called");
        }

        public void test(int a)
        {
            throw new NotImplementedException();
        }

        public new void test1()
        {
            Console.WriteLine("Child test1");
        }

    }

    public class newChild : Child
    {
        static newChild()
        {
            Console.WriteLine("newChild static constructor called");
        }
    }
}
