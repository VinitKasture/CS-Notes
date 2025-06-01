/*
    How c# works - 
    .Net framework executes the program and checks for possible erros and if no errors were found
    it converts the code into Common intermediate language and 
    it loads the code into assembly(A file with all namespaces inside it and if the file is big
    it seperates into different related files) after that OS executes the code 

     
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

    implicitly typed variables
    int i = 1;
    var i = 1; (compiles as int)

    fields
    A field is a data member of a class that directly stores a value.are often declared 
    with private or protected access modifiers to encapsulate the data and provide controlled
    access to it within the class. They are typically used for storing the 
    internal state of an object.

    Property
    Properties provide a way to expose the internal state of an object while controlling 
    how it is accessed and modified. Properties use accessor methods (getters and setters) 
    to define the logic for getting and setting the underlying field's value.

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


     OOPS
     Abstraction is hiding implemetation details and highlighting object essential features.
     it is basically a concept about using something without needing to understand its inner workings.


     Encapsulation is the concept of restricting direct access to the data members
     
     Inheritance is the concept of acquiring parents class properties ,fields and methods.
     types of inheritance

     single 
     parent --> child

     multi-level 
     parent --> child --> child

     hierarchical
     parent --> child1
     parent --> child2

     hybrid
     parent --> child1 --> child3
     parent --> child2 --> child3

     hybrid
     parent1 --> child1
     parent2 --> child1 

     Polymorphism is an approch of defining a method with multiple behaviour where
     behaiours of the methods will be changing based on parameters of that method
     i.e. whenever input changes the output also changes

     Abstract class
     Abstract class is used to share a common definitions amongst the derived classes.
     Use abstract classes when you dont want your base class to be instanciated and
     you want to share some common definitions in your base class via inheritance.

                                    ref                                 out
    Must initialize before use?	✅ Yes	                                ❌ No
    Must assign inside method?	❌ No (can just read or change)	        ✅ Yes (must assign)
    Can be read before assigning inside the method?	✅ Yes	            ❌ No (must assign first)

    there is also one more keyword as in which can only be read inside the method and cannot be modified


    A reference is a pointer to an instance which does not have any memory allocation.
    memory allocation is done only for instances and not for references

    interfaces
    the default scope for the members of interface is public by default,
    you can inherit from class as well as from interface at the same time,
    by default every member of the interface is abstract so we dont need
    to explicitly define it
    we can't define fields in interface
    if required an interface can inherit from another interface also











*/