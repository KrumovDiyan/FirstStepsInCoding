using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace While
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* while (true)
             {
                 string wordInput = Console.ReadLine();
                 if (wordInput == "stop")
                 {
                     break;
                 }
                 Console.WriteLine(wordInput);
             }
             Console.WriteLine("Loop stopped");*/

            int a = 2;
            while (a < 20)
            {
                Console.WriteLine("A is : " + a);
                a = a + 2;
            }


        }
    }
}
