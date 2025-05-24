enum Role {
  Player,
  Coach,
  Captain,
}

interface Staff {
  id: number;
  name: string;
  role: Role;
}

const staffList: Staff[] = [
  { id: 1, name: "Siva Sai", role: Role.Player },
  { id: 2, name: "Surya", role: Role.Coach },
  { id: 3, name: "Mahesh", role: Role.Captain },
];

function printStaffSummary(): void {
  staffList.forEach(staff => {
    console.log(`Name: ${staff.name}, Role: ${Role[staff.role]}`);
  });
}

printStaffSummary();

