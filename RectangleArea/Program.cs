﻿using System;
using System.Runtime.CompilerServices;

namespace MyFirstStepsInCoding
{
    class Program
    {

        static void Main(string[] args)
        {
            int sideA = int.Parse(Console.ReadLine());
            int sideB = int.Parse(Console.ReadLine());
            int area = sideA*sideB;
            Console.WriteLine(area);
        }
    }
}
