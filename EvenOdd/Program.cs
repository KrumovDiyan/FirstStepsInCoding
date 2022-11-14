namespace MyFirstStepsInCoding
{
    class Program
    {

        static void Main(string[] args)
        {
            int firstNumber = int.Parse(Console.ReadLine());
            if (firstNumber % 2 == 0)
            {
                Console.WriteLine("even");
            }
            else Console.WriteLine("odd");

        }
    }
}
