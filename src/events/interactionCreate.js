module.exports = {
    name: "interactionCreate",

    async execute(interaction) {
        console.log("Interaction received!");

        if (!interaction.isChatInputCommand()) return;

        console.log("Command:", interaction.commandName);

        const command = interaction.client.commands.get(interaction.commandName);

        console.log("Found command?", !!command);

        if (!command) return;

        try {
            await command.execute(interaction);
            console.log("Executed!");
        } catch (error) {
            console.error(error);
        }
    },
};