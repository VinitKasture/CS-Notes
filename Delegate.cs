using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class NotificationService
    {
        public static void MessageService(string number)
        {
            Console.WriteLine("Message sent to {0}", number);
        }
        public static void WhatsappMsgService(string number)
        {
            Console.WriteLine("Whatsapp message sent to {0}", number);
        }
    }
}
