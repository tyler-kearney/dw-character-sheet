// Global Variables
const abilityScores = [16, 14, 13, 12, 9, 8];

// Function Declarations
function populateAbilities() {
    const abilitySelects = document.querySelectorAll('.ability-score');
    abilitySelects.forEach(select => {
        abilityScores.forEach(score => {
            const option = document.createElement('option');
            option.value = score;
            option.text = score;
            select.appendChild(option);
        });
    });
}

function handleAbilityChange(event) {
    const selectedScore = parseInt(event.target.value);
    const abilitySelect = document.querySelectorAll('.ability-score');

    abilityScores.splice(abilityScores.indexOf(selectedScore), 1);

    abilitySelect.forEach(select => {
        if (select !== event.target) {
            const scoreRemove = Array.from(select.options).filter(option => option.value === selectedScore);
            scoreRemove.forEach(option => option.remove());
        }
    });
}

// Event Listeners
const abilitySelects = document.querySelectorAll('.ability-score');
abilitySelects.forEach(select => {
    select.addEventListener('change', handleAbilityChange);
});

// Calls
populateAbilities();