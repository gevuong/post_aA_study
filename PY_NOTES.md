## Python Basics

### Numbers

Division **always** results in a float, even if the result would be a whole number (e.g. 10 / 2 will give you 5.0).

You can create integers using the `int()` function. You can create floats using the `float()` function. Using `int()` on a float is not the same as using `round()` on one.

### Strings

Strings have to start and stop with the same quote symbol, either single (') or double (") or triple (''' or """) quotes. You also don't want to use that same quote symbol inside the string unless you escape with with backslash (\).

Strings can be combined with the plus sign (+) which is known as concatenation.

Strings can also be combined using string formatting which uses two braces ({}) as placeholders and the `.format()` method. You provide a bit of data to `.format()` for every placeholder in your string. For example:

```
"My {} is {}".format("name", "Kenneth")
```

This string has two placeholders so we have to give two new things to `.format()`.

The above would produce "My name is Kenneth".

You can also multiply strings by an integer. This will result in the string's content being repeated as many times as the value of the integer. "hi" * 3 would create "hihihi".

And, finally, you can create a string from another value by using the str() function.


## Lists

In Python, when we want to hold onto multiple things at once, we put them into a list.

You can create a list with the list() function or using two square brackets ([]).

You can use the plus sign to add items into a list so long you add two lists together (e.g. [1, 2, 3] + [4, 5] would create [1, 2, 3, 4, 5].
[1, 2, 3] + 4 would create a TypeError). You can multiply a list by an integer and get back the content of the list as many times as the value of the integer (e.g. [1, 2] * 2 would produce [1, 2, 1, 2]).

You can use the `.append()` method to add a **single item** to the end of a list.

You can use the `.extend()` method to add **every item** from one list to another list.

You can use the `.remove()` method to remove a particular value from a list.

**Join**

The str type's .join() method lets us combine all of the items in a list into a string with a particular string between each pair of items. How about an example?

```
my_favorite_colors = ["green", "black", "silver"]
my_string = "My favorite colors are "
my_string + ", ".join(my_favorite_colors)
```

The above would produce "My favorite colors are green, black, silver".

```
available = "banana split;hot fudge;cherry"
sundaes = available.split(";")
menu = "Our available flavors are: {}.".format(", ".join(sundaes))
```

The above would produce "Our available flavors are: banana split, hot fudge, cherry".

You **cannot** join things that aren't strings. Doing ", ".join(5, 10, 15) will give you an exception.

However, Ruby's .join method is the following.
```
[ "a", "b", "c" ].join        #=> "abc"
[ "a", "b", "c" ].join("-")   #=> "a-b-c"
```

**Deletion**

`del my_list[0]` and `my_list.remove("a")` do two very different things so be careful when you use each one. `del` deletes an item at a particular index. `.remove()` deletes the first instance of the value you provide it.
You can't delete things from a string using `del`.


## Logic
The `bool()` function will tell you whether something (a variable, a comparison, or anything else) evaluates to true or false. It's super-handy for testing your assumptions when you're still learning.

True + True => 2

The following values are considered false:
- None
- False
- zero of any numeric type
- any empty sequence, '', (), []
- any empty mapping, {}

The `is` operator compares whether A has the same memory address as B

Python if blocks always start the same way:

```
time = 15

store_open = None
store_hours = [13, 14, 15, 16]

if time in store_hours:
    store_open = True
elif time not in store_hours:
    store_open = False
else:
    store_open = None
```

Python has two uses for the `in` keyword.
`in` returns whether or not a value is inside of a container. We can use this to see if, for example, a smaller string is in a bigger string or if a certain item is in a list.
