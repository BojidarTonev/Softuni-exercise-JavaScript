class Organization {
    constructor(name, budget){
        this.name = name;
        this.budget = budget;
        this.employees = [];

        this.seperatedBudgets = {
            marketing: this.budget * (40/100),
            finance: this.budget * (25/100),
            production: this.budget * (35/100)
        }
    }

    get departmentsBudget(){
        return {
            marketing: this.seperatedBudgets['marketing'],
            finance: this.seperatedBudgets['finance'],
            production: this.seperatedBudgets['production']
        }
    }

    add(employeeName, department, salary){
        let budgets = this.departmentsBudget;

        if(budgets[department] >= salary){
            let employee = {
                employeeName,
                department,
                salary
            }

            this.employees.push(employee);
            
            this.seperatedBudgets[department] -= salary;

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${budgets[department]}.`
        }
    }

    employeeExists(employeeName){
        let employee = this.employees.find(e => e.employeeName == employeeName)
        if(employee){
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }

    leaveOrganization(employeeName){
        let employee = this.employees.find(e => e.employeeName == employeeName)
        if(employee){
            this.seperatedBudgets[employee.department] += employee.salary
            this.employees.splice(this.employees.indexOf(employee), 1);

            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }   

    status(){
        let str = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let marketingEmployees = this.employees.filter(e => e.department == 'marketing').sort((a, b) => b.salary - a.salary).map(e => e.employeeName);
        let financeEmployees = this.employees.filter(e => e.department == 'finance').sort((a, b) => b.salary - a.salary).map(e => e.employeeName);
        let productionEmployees = this.employees.filter(e => e.department == 'production').sort((a, b) => b.salary - a.salary).map(e => e.employeeName);

        str += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.join(', ')} | Remaining Budget: ${this.seperatedBudgets['marketing']}`;
        str += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.join(', ')} | Remaining Budget: ${this.seperatedBudgets['finance']}`;
        str += `\nProduction | Employees: ${productionEmployees.length}: ${productionEmployees.join(', ')} | Remaining Budget: ${this.seperatedBudgets['production']}`;
        
        return str;
    }

}