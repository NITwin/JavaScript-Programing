const userRole = 'admdn';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = "Full Access granted";

} else if (userRole === 'manager'){
    accessLevel = 'Limited access granted'
} else {
    accessLevel = 'Get out over here'
}
document.getElementById('statement').innerText = `${accessLevel}`;
console.log(accessLevel);