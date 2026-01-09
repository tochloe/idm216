// Team member data - Edit this array to update content
const teamData = [
    {
        name: "Tom Chen",
        primaryRole: "Primary Coder",
        secondaryRole: "Secondary Data Architect",
        image: "images/tom_chen.avif" // Add image URL here or use null for placeholder
    },
    {
        name: "Christopher Straface",
        primaryRole: "Primary Designer",
        secondaryRole: "Secondary Coder",
        image: "images/christopher_straface.avif"
    },
    {
        name: "Jeremy Senh",
        primaryRole: "Primary Data Architect",
        secondaryRole: "Secondary Project Manager",
        image: "images/jeremy_senh.avif"
    },
    {
        name: "Chloe To",
        primaryRole: "Primary Project Manager",
        secondaryRole: "Secondary Designer",
        image: "images/chloe_to.avif"
    }
];

// Function to create a team member card
function createTeamMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'team-member';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'member-image-container';
    
    if (member.image) {
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.className = 'member-image';
        imageContainer.appendChild(img);
    }
    
    const info = document.createElement('div');
    info.className = 'member-info';
    
    const name = document.createElement('p');
    name.className = 'member-name';
    name.textContent = member.name;
    
    const role = document.createElement('p');
    role.className = 'member-role';
    
    const primaryRole = document.createElement('span');
    primaryRole.className = 'role-primary';
    primaryRole.textContent = member.primaryRole;
    
    role.appendChild(primaryRole);
    role.appendChild(document.createTextNode(', ' + member.secondaryRole));
    
    info.appendChild(name);
    info.appendChild(role);
    
    card.appendChild(imageContainer);
    card.appendChild(info);
    
    return card;
}

// Function to render all team members
function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    
    teamData.forEach(member => {
        const card = createTeamMemberCard(member);
        teamGrid.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderTeamMembers);
