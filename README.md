# To Do List
**WEB-115 Final Project Proposal**
Student: Jiya Mahalavat | Repo: `WEB-115_FinalProject_Mahalavat`

---

## Overview

This project is a web-based to do list application that helps users organize tasks based on urgency, priority, and estimated time. Users can input tasks and manage them through an interactive interface 
that updates dynamically as they add, complete or delete items. The app will go beyond a basic to do list by allowing tasks to be sorted and prioritized, helping users focus on what needs to be done first.

The target users are students, including middle school, high school, and college students, who need a simple way to keep track of assignments, studying, and responsibilities. However, the app can also be used by anyone who wants a structured and interactive to-do list to manage daily tasks more efficiently.

---

## Features

- Add tasks with details (name, due date, priority, time estimate)
- Mark tasks as complete
- Delete tasks
- View tasks in an organized list
- Visual progress indicator (e.g., completion percentage)
- Tasks can be sorted or prioritized
---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** |If statements check if a task is complete. If statements assign priority levels. Loops go through all tasks in the list. Those loops update and display tasks. |
| **Event Listeners** | Event listeners detect button clicks. They add new tasks, delete tasks and mark tasks as complete. |
| **DOM Element Creation** | The app creates task elements dynamically. It creates buttons for each task and updates the task list on the screen. It also updates the progress display. |
| **Classes & Subclasses** | A Task class stores the task data and a subclass adds priority features. |

---

## DLC — Additional Topics

### JSON & Local Storage
JSON and local storage will be used to store the tasks the user enters and save their progress. The app will convert task data into JSON format when saving.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- `localStorage` for saving tasks and progress
- VS Code + GitHub
