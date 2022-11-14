namespace MyFirstStepsInCoding
{
    class Program
    {

        static void Main(string[] args)
        {
            double depositValue = double.Parse(Console.ReadLine());
            int depositMonth = int.Parse(Console.ReadLine());
            double yearPerc = double.Parse(Console.ReadLine());

            double total = depositValue + depositMonth * ((depositValue * yearPerc) / 12);
            Console.WriteLine(total);
        }
    }
}
