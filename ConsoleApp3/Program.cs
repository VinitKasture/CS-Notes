using ConsoleApp3;
using ConsoleApp3.Interface_Example1;
using System.Text;

public delegate void notification(string data);
class Program
{
    public static void Main()
    {
        //Struct
        //Coordinates coordinates = new Coordinates(1,2);
        //Console.WriteLine("{0} {1}",coordinates.X,coordinates.Y); //1,2

        //Enums
        //Console.WriteLine(Weekdays.Saturday); // saturday
        //int i = (int) Weekdays.Saturday; 
        //Console.WriteLine(Weekdays.Saturday + i); //10

        //Interface
        //IEmailService emailService = new EmailService();
        //HomeController hc = new HomeController(emailService);
        //hc.Notify();

        //Tuple
        //ValueTuple<string,int,int> tp = ValueTuple.Create("1", 2, 3);
        //Console.WriteLine(tp.GetType().IsValueType);

        //Indexers
        //Student student = new Student();
        //Console.WriteLine(student[1]);

        //Delegate
        notification notifications = NotificationService.MessageService;
        notifications += NotificationService.WhatsappMsgService;
        notifications("8766509117"); //Invoking all notifications
    }
}

