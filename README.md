# Business-Management-System
<h2 align="left">Introduction:</h2>

A Business Management System (BMS) is a full system meant to streamline basic business activities by automating them. It ensures that consumer information, preferences, and interactions are documented for better service delivery, therefore enabling efficient management of them. Under tracking availability, price, and classification the system organizes product inventories. It allows role-based access as well as safe processing of administrative and personnel data, therefore enabling user management. The BMS also handles resolutions, schedules, and service requests, thereby regulating maintenance operations. Perfect entry management provides correct recording and monitoring of data, processes, and transactions, therefore supporting enhanced corporate performance and decision-making.

<h2 align="left"> Key Features:</h2>

- **Customer Management**: Track consumer tastes, knowledge, and interactions to improve the quality of services and strengthen strong relationships.
- **Product Management**: From all angles, good management of items catalogues, inventory levels, pricing, and updates guarantees perfect operations..
- **User Management**: Closely review user rights and permissions to enable workforce organization and better job-based access.
- **Service Management**: Using service requests, scheduling, and problem corrective action will help one to be more operational efficient and satisfy customers.
- **Data Entry & Tracking**: data especially to improve analytics and decision-making.

<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left">Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

## 1. **Database Structure**

The platform will require a relational database to manage Customer,Entry,Product,User and Servicing . Below is a proposed database structure with the key tables.

<h3 align="left">Tables:</h3>

---

### a) **Users**

| **Field Name** | **Type** |
| --- | --- |
| email | String |
| password | password |
| name | String |
| role | String |
| createdat | Date |

### b) Customer

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| address | String |
| phone | String |
| amount | Number |
| paid | Number |
| due | Number |
| returnAmount | Number |
|  profit | Number |
| createdAt | Date |
| updatedAt | Date |

### c) Product

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| code | String |
| rate | Number |
| createdAt | Date |

### d) Entry

| **Field Name** | **Type** |
| --- | --- |
| Product | Ref. Object → Product |
| quantity | Number |
| type | String |
|  createdAt | Date |

### e) Servicing

| **Field Name** | **Type** |
| --- | --- |
| product | Ref. Object → Product |
| name | String |
| address | String |
| quantity | Number |
| serviceCharge | Number |
| status | String |
| deliveryDate | Date |
| createdAt | Date |

<h2 align="left">Modules and Components:</h2>

<h3 align="left">Modules:</h3>

1. **Customer Management Module:**
    - Customer database and profiles
    - Customer segmentation
2. **Product Management Module:**
    - Product cataloging
    - Inventory management
    - Pricing and discounts
    - Product analytics
3. **User Management Module:**
    - Role-based access control
    - User registration and profiles
    - Activity logging
    - Permissions and authentication
4. **Service Management Module:**
    - Service request handling
    - Scheduling and task assignments
5. **Entry Management Module:**
    - Record management
    - Data validation
    - Reporting tools
6. **Reporting & Analytics Module:**
    - Real-time dashboards
    - Performance analytics
    - Exportable reports
    - Predictive insights
7. **Integration Module:**
    - API support
    - Integration with CRM, ERP, and other systems
    

<h3 align="left">Components:</h3>

- Database Layer:Centralized storage for customers, products, users, and service data.
- API Layer:Facilitates communication between backend, and integrations.
- Authentication Component:Secure login and user access management.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="#" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
