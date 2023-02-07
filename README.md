# Burger Stacker
![image](https://user-images.githubusercontent.com/106713788/216881466-7b6f7c2d-be11-4d64-9b3a-3d54a071157c.png)

___
## User Stories
* As a user, I want to see all available burger ingredients listed on the left side.
* I want the ability to add any ingredient onto the burger stack using a button.
* I want to see each ingredient I select added to the top of the burger stack on the right side.
* I want the ability to clear the burger stack so I can start again.
* I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

## Component Hierarchy:

```
App
|__IngredientList
|  |__Ingredient(s)
|
|__BurgerPane
|  |__BurgerStack
|  |  |__Ingredient(s)
|  |
|  |__ClearBurger
```
