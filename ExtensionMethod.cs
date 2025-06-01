using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntExtension
{
    public static class ExtensionMethod
    {
        public static bool isGreaterThan(this int i, int value)
        {
            return i > value;
        }
        
        public static bool isEmailValid(this string email)
        {

            string[] validEmailSuffix = new string[] { "in", "org", "net", "edu", "com" };
            string suffix = email.Split('.')[1];

            if (email.ToLower().Contains("@")) 
            {
                foreach (var item in validEmailSuffix)
                {
                    if (suffix == item)
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
