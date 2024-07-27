// Global Variables
const abilityScores = [16, 14, 13, 12, 9, 8];

const classes = {
    barbarian: {
        moves: ['Rage', 'Unstoppable Force', 'Tireless'],
        hitDice: 12,
        armor: 'light armor',
        savingThrows: ['strength', 'constitution'],
        equipment: ['greataxe or handaxe', 'light armor or medium armor', 'explorer\'s kit']
    },
    bard: {
        moves: ['Inspire Courage', 'Cutting Words', 'Jack of all Trades'],
        hitDice: 8,
        armor: 'none',
        savingThrows: ['dexterity', 'charisma'],
        equipment: ['lute or another instrument', 'diplomat\'s kit', 'explorer\'s kit']
    },
    cleric: {
        moves: ['Divine Intervention', 'Channel Divinity', 'Lay on Hands'],
        hitDice: 8,
        armor: ['light armor', 'medium armor', 'shield'],
        savingThrows: ['wisdom', 'charisma'],
        equipment: ['mace or warhammer', 'light armor or medium armor', 'shield', 'holy symbol']
    },
    druid: {
        moves: ['Wild Shape', 'Speak with Animals', 'Druidcraft'],
        hitDice: 8,
        armor: ['light armor', 'medium armor', 'shield'],
        savingThrows: ['intelligence', 'wisdom'],
        equipment: ['club or scimitar', 'leather armor', 'explorer\'s kit', 'druidic focus']
    },
    fighter: {
        moves: ['Second Wind', 'Action Surge', 'Fighting Style'],
        hitDice: 10,
        armor: ['light armor', 'medium armor', 'heavy armor', 'shield'],
        savingThrows: ['strength', 'constitution'],
        equipment: ['martial weapon and shield or 2 martial weapons', 'light or medium armor', 'explorer\'s kit']
    },
    immolator: {
        moves: ['Ignite', 'Consume', 'Pyromancy'],
        hitDice: 10,
        armor: ['light armor', 'medium armor'],
        savingThrows: ['dexterity', 'constitution'],
        equipment: ['simple weapon', 'light or medium armor', 'fire starter']
    },
    paladin: {
        moves: ['Divine Smite', 'Lay on Hands', 'Sacred Oath'],
        hitDice: 10,
        armor: ['light armor', 'medium armor', 'heavy armor', 'shield'],
        savingThrows: ['wisdom', 'charisma'],
        equipment: ['martial weapon and shield or 2 martial weapons', 'light or medium armot', 'holy symbol']
    },
    ranger: {
        moves: ['Hunter\'s Mark', 'Favored Enemy', 'Primeval Awareness'],
        hitDice: 10,
        armor: ['light armor', 'medium armor', 'leather armor'],
        savingThrows: ['strength', 'dexterity'],
        equipment: ['martial or simple weapon', 'light or medium armor', 'explorer\'s kit']
    },
    thief: {
        moves: ['Sneak Attack', 'Cunning Action', 'Expertise'],
        hitDice: 8,
        armor: ['light armor', 'leather armor'],
        savingThrows: ['dexterity', 'intelligence'],
        equipment: ['rapier, shortsword, or 2 daggers', 'thieve\'s tools', 'disguise kit', 'light or leather armor', 'shortbow', 'dagger']
    },
    wizard: {
        moves: ['Spellcasting', 'Arcane Recovery', 'Prepared Spells'],
        hitDice: 6,
        armor: 'light armor',
        savingThrows: ['intelligence', 'wisdom'],
        equipment: ['spellbook', 'quarterstaff or dagger', 'scholar\'s supplies', 'component pouch']
    }
}

const classSelect = document.getElementById('class');
const updateButton = document.getElementById('update-button');

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

updateButton.addEventListener('click', () => {
    const selectedClass = classSelect.value;
    const classData = classes[selectedClass];

    // Remaining functionality for setting class data
    const movesElement = ducument.getElementById('moves');
    // TODO: implement remaining logic for updating moves

    const hdElement = document.getElementById('hp');
    hdElement.textContent = classData.hitDice;

    const armorElement = document.getElementById('armor');
    armorElement.textContent = classData.armor;

    const savingThrowsElement = document.getElementById('saving-throws');
    savingThrowsElement.textContent = classData.savingThrows.join(', ');

    const equipmentElement = document.getElementById('gear');
    equipmentElement.innerHTML = '';
    classData.equipment.forEach(item => {
        const equipmentItem = document.createElement('li');
        equipmentItem.textContent = item;
        equipmentElement.appendChild(equipmentItem);
    });
});

// Calls
populateAbilities();