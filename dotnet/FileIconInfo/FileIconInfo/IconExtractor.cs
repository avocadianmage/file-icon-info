using System;
using System.Drawing;
using static FileIconInfo.NativeMethods;

namespace FileIconInfo
{
    public class IconExtractor
    {
        public string GetIconAsBase64(string path)
        {
            var hIcon = GetJumboIcon(GetIconIndex(path));
            try
            {
                // from native to managed
                using (var icon = (Icon)Icon.FromHandle(hIcon).Clone())
                {
                    var converter = new ImageConverter();
                    var data = (byte[])converter.ConvertTo(
                        icon.ToBitmap(), typeof(byte[]));
                    return Convert.ToBase64String(data);
                }
            }
            finally
            {
                DestroyIcon(hIcon);
            }
        }

        int GetIconIndex(string pszFile)
        {
            var sfi = new SHFILEINFO();
            SHGetFileInfo(
                pszFile,
                0,
                ref sfi,
                (uint)System.Runtime.InteropServices.Marshal.SizeOf(sfi),
                SHGFI_SYSICONINDEX | SHGFI_LARGEICON | SHGFI_USEFILEATTRIBUTES);
            return sfi.iIcon;
        }

        // Returns a high-resolution 256x256 icon.
        IntPtr GetJumboIcon(int iImage)
        {
            IImageList spiml = null;
            var guil = IID_IImageList2;

            SHGetImageList(SHIL_JUMBO, ref guil, ref spiml);
            var hIcon = IntPtr.Zero;
            spiml.GetIcon(
                iImage,
                (int)(ImageListDrawItemConstants.ILD_TRANSPARENT 
                    | ImageListDrawItemConstants.ILD_IMAGE),
                ref hIcon);

            return hIcon;
        }
    }
}