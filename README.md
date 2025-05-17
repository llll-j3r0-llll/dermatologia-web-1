### 🧴 Dermatology Clinic - Medical Appointment Management Web System
This project is a web application designed for a dermatology clinic with the goal of facilitating the scheduling and management of medical appointments. It offers a smooth, modern, and accessible user experience for both patients and clinic administrators.

### 📌 Table of Contents

+ 🔍 Project Description
+ ⚙️ Main Features
+ 📂 Project Structure
+ 📈 Possible Future Improvements
+ 🧑‍💻 Author
+ 🔧 LiCENSE

### 🔍 Project Description
The application allows for the registration and viewing of dermatology medical appointments. It includes a dynamic calendar that highlights days with active appointments and a CRUD system (create, read, update, and delete) for appointments, all within a user-friendly interface. This solution is aimed at small clinics that want to digitalize their patient management processes without relying on complex or expensive platforms.

### ⚙️ Main Features
1. Medical Appointment Scheduling
Users can register a new appointment by entering the patient's name, the assigned doctor, the date, and time.

2. Viewing Scheduled Appointments
All registered appointments are displayed in an organized table, allowing staff to have a clear view of upcoming appointments.

3. Interactive Calendar
A visual calendar marks the days with appointments, making navigation and planning easier.

4. Editing Existing Appointments
Users can modify the details of a previously scheduled appointment, useful for time changes, doctor swaps, or corrections.

5. Deleting Appointments
Appointments can be easily deleted in the case of cancellations or errors, keeping the schedule updated.

6. Data Validation
Before registering an appointment, the system validates that all fields are complete, preventing input errors.

7. Responsive Design
The interface is designed to adapt to different screen sizes, including mobile devices, tablets, and desktops.

8. Intuitive Interface
The navigation is simple and clear, designed for easy use by any user (patient or clinic staff) without technical complications.

9. Services Section
A list of treatments offered by the clinic.

10. Basic but Functional Interface
HTML + CSS (though the style is assumed to be simple).
JS to handle the logic for the appointment system.

✔️ Viewing scheduled days in an interactive monthly calendar

✔️ A list of appointments with buttons for:

- 📝 Edit

- 🗑️ Delete

✔️ Basic form validations

✔️ Intuitive and modern interface, compatible with mobile devices

### 📈 Possible Future Improvements
1. More complete validation with JavaScript (e.g., avoid past hours, check if a doctor already has an appointment at that time, etc.).

2. Personalized error messages if any fields are missing.

3. Auto-clear the form after scheduling an appointment.

4. Data persistence: save appointments in localStorage or sessionStorage to avoid losing data when the page is reloaded.

5. Filter by doctor or day in the calendar.

6. Search for appointments by patient name.

7. Change theme colors (light/dark mode 🌙).

8. Appointment counter per doctor.

9. Login for doctors to view only their appointments.

10. Export appointments to PDF or Excel.

11. Email notifications.

12. An admin panel where an administrator can see all appointments and delete or edit them manually.

13. A simple AI to suggest free time slots or assign appointments to doctors with fewer appointments (optimization).

14. Appointment history per patient if additional user control is added.

15. Modular code with separate JS files (for better maintainability).

### 🧪 Technologies Used
- HTML5 – Semantic and accessible structure

- CSS3 – Modern and adaptable styling with custom styles

- JavaScript (Vanilla) – Functional logic, DOM manipulation, events, and validations

- (Optionally integrates with localStorage, Firebase, or backend APIs for data persistence)

### 📂 Project Structure
bash
Copiar
Editar
dermatologia-clinica/
│ ├── index.html  # Main page with app structure
│ ├── styles.css  # Style sheet: responsive and modern design
│ ├── script.js  # Complete app logic (form, calendar, CRUD)
└── assets/       # Resources like icons, images, etc.

### 🧑‍💻 Author
Developed by [Skynet (Jerónimo, Santiago, Gustavo, Jorge)]