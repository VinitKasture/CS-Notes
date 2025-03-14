using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3.Interface_Example1
{
    public interface IEmailService
    {
        void Send(string message);
    }

    public class EmailService : IEmailService
    {
        public void Send(string message)
        {
            Console.WriteLine("Sending email: " + message);
        }
    }

    public class HomeController
    {
        private readonly IEmailService _emailService;

        public HomeController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public void Notify()
        {
            _emailService.Send("Hello!");
        }
    }

}
