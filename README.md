# WebApp
It contains only fronted related concept <br/>

## Steps to create and run the react project <br>

| 1 | `npm create vite@latest` | Create project | <br/>
| 2 | `cd project-name` | Enter folder | <br/>
| 3 | `npm install` | Download dependencies | <br/>
| 4 | `npm run dev` | Run app |

## Day 2 – Concepts Learned

- Created a new **Footer** component  
- Added a paragraph with copyright text  
- Used `new Date().getFullYear()` to display the current year dynamically  

### Styling Concepts in React

There are three main ways to style components:

1. **External CSS**
   - Write CSS in files like `index.css`
   - Provides **global styles** for the application

2. **CSS Modules**
   - Create a separate `.module.css` file for each component
   - Styles are **scoped** to the component and avoid conflicts

3. **Inline Styling**
   - Styles are written inside the same file using **JavaScript objects**
   - Not convenient for large applications due to **poor maintainability**
