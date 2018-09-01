using System;
using System.Drawing;
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

            var icon = Icon.ExtractAssociatedIcon(path);
            var base64String = convertIconToBase64String(icon);
            Console.WriteLine(base64String);
        }

        static string convertIconToBase64String(Icon icon)
        {
            var converter = new ImageConverter();
            var data = (byte[])converter.ConvertTo(
                icon.ToBitmap(), typeof(byte[]));
            return Convert.ToBase64String(data);
        }
    }
}
