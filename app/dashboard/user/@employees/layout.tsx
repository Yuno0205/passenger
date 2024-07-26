// Layout chung cho các route con trong @employees
import { ReactNode } from 'react';

export default function EmployeesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Employees Section</h2>
      <nav>
        <ul>
          <li>
            <a href="/user/@employees/account">Account</a>
          </li>
          <li>
            <a href="/user/@employees/payroll">Payroll</a>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
