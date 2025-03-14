/* 
    Namespace - a namespace is a container for classes it helps organise class and other data structures
    by grouping together and avoiding nameconflicts.

    Struct  
    *When to use
    # Faster memory allocation and dellocation - 
    As it's stored in Stack it is automatically allocated and dellocated when 
    the instance in no longer referenced.
    # When immutability is required.
    # When no inheritance is required and structure is simple.

    *When not to use
    # When inheritance or complex behaviour is required.
    # When the struct size is greater.
    # When the immutability is required.

    implicitly typed variables
    int i = 1;
    var i = 1; (compiles as int)

    Enums
    Enums allows you to assign meaningful names to a set of integral constants.
    this helps us prevent the use of numbers in the code
    Weekdays.Monday is more readable than weekdays[0]

    String vs. StringBuilder in C#
    String is a reference type stored on the heap and is immutable, 
    meaning any modification creates a new memory allocation.

    StringBuilder solves this issue by being mutable and dynamically expanding its 
    memory without creating new objects. It also provides built-in properties and methods 
    that make string manipulation more efficient

    Anonymous Type
    Use it when you need a quick and temporary variable to store data
    without creating a class, which should be readonly.
    not to use when the type needs modifications or further need to implement oops , fields, methods, events etc.

    Dynamic Type
    use dynamic when needed type checking at runtime, this is generally slower than statically
    typed variables and can cause performance issues and unexpected runtime errors

    # both are neither a value type nor a reference type it depends on it's assigned value
    if both are assigned an int it will be treated as int 
    but it's assigned a string then it will be treated as string which is a reference type

        Dynamic                      vs                      Var
     Type checking at runtime               Type checking at compile time
     Type can change                        Type cannot change

     Nullable modifier
     Nullable is a modifier that allows variables to store null values
     this is rather usefull in scenarios like
     API Response -> where data could be null
     User Input -> If user hasn't enter information

     Que ? Instead of null if i could use 0 then why should i use nullable modifier
     --- 0 is some value but null is like no information or not set.

     Partial Class
     Use partial class when you want to seperate ui logic, data access etc

     Indexer
     Indexers allows any object to be accessed like an array
     use this when class itself is a collection and have data where
     something like get or set method is not available.
     like Student.GetName("name") is better than Student["name"]

     Delegate 
     Delegate is a reference type that holds reference to the method.
     delegate is used to pass method as a parameter. 
     A delegate can invoke multiple methods (multicast delegate) when multiple 
     methods are assigned to it.





















*/