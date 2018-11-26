using System;
using System.IO;

namespace FileIconInfo
{
    static class Program
    {
        static void Main()
        {
            var path = Console.ReadLine();
            if (!File.Exists(path))
            {
                Console.Error.WriteLine("Path {0} does not exist.", path);
                return;
            }

            var base64String = new IconExtractor().GetIconAsBase64(path);
            Console.WriteLine(base64String);
        }
    }
}
