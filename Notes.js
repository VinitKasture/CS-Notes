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























*/