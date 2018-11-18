//% weight=70 icon="\u30A2" color=#EC7505 block="Test"
namespace test {

    //% shim=test::dammy
    export function dammy(str: number): number {
        return 1
    }
    /**
     * Read the current sound level from the microphone
     */
    //% blockId=test_block
    //% block="Test block"
    export function getSoundLevel(): void {
        console.log(dammy(3)+"")
    }
}
