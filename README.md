# Custom Tournament Bracket Builder
**WEB-115 Final Project Proposal**
Student: Jiya Mahalavat | Repo: `WEB-115_FinalProject_Mahalavat`

---

## Overview

This is a web app that lets users build a custom study schedule based on their needs and priorities. Users can insert what tasks they have to do and sort them by urgency and duration. 
The if statements and loops can be used to iterate through what the user selects and what the user wants to do. All tasks will be stored in localStorage using JSON. 

The target user would be students, whether they're studying in university or middle and high school. Students can use this planner if they're studying for their next exam or if they're studying for 
anything in general. Also, people can use this as a regular planner that helps them manage and organize their daily lives, so this planner can be used as a general planner (not just for studying). 

---

## Features

- Create a new named tournament and add up to 16 contestants.
- App auto-generates a balanced single-elimination bracket from the entry list.
- Click to select the winner of each match and advance them to the next round.
- Bracket updates in real time as winners are chosen — completed matches are visually locked and greyed out.
- A champion screen appears when the final match is decided.
- All tournament state is saved to `localStorage` — progress survives a page refresh.
- Users can reset a tournament to start over or delete it entirely.

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Generating the bracket requires looping over contestants to pair them into first-round matches. If statements determine whether a round is complete (all winners chosen) before unlocking the next round, and check edge cases like odd contestant counts or a bye slot. |
| **Event Listeners** | Click listeners on each match card select the winner and trigger a re-render. A submit listener on the setup form kicks off bracket generation. A reset button clears state after a confirmation check. |
| **DOM Element Creation** | The entire bracket (every round column, match card, contestant name label, and winner indicator) is built dynamically with `createElement` and `appendChild`. Nothing is hardcoded in the HTML beyond the app shell. |
| **Classes & Subclasses** | The base class will be a class for the overall planner and will have many subclasses which basically will add on to the elements of the planner. So the base class will be called
"class Planner" and that will be used to fullfil its purpose.  |

---

## DLC — Additional Topics

### JSON & Local Storage
JSON & Local Storage will be used to store the tasks the user enters and  ,  On load, `JSON.parse()` restores the bracket exactly where the user left off. This means no data is lost between sessions without any backend.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- MusicBrainz API *(free, no API key required)*
- `localStorage` for tournament persistence
- HTML Canvas for bracket rendering
- VS Code + GitHub
