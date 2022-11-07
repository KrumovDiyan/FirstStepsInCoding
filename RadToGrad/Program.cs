using System;
using System.Runtime.CompilerServices;


namespace MyFirstStepsInCoding
{
    class Program
    {

        static void Main(string[] args)
        {
            double rad = double.Parse(Console.ReadLine());

            double result = rad*180/Math.PI;
            Console.WriteLine(Math.Round(result));
        }
    }
}
