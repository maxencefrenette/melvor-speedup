export function setup(ctx) {
    ctx.settings.section('General').add({
        type: 'number',
        name: 'speedupFactor',
        label: 'Speedup Factor',
        hint: 'Speeds up the game by this amount.',
        default: 5,
    });

    ctx.patch(Game, 'runTicks').before(function (ticksToRun) {
        const speedupFactor = ctx.settings.section('General').get('speedupFactor');
        return [5 * speedupFactor];
    });
}
