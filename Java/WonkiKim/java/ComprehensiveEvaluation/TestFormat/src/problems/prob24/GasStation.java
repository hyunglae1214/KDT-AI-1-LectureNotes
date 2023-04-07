package problems.prob24;

import customLibrary.math.RandomGenerator;

public class GasStation {
    private float x;
    private float y;

    public GasStation() {
        RandomGenerator randomGenerator = new RandomGenerator();
        x = randomGenerator.randomFloat(Problem24.MIN_X, Problem24.MAX_X);
        y = randomGenerator.randomFloat(Problem24.MIN_Y, Problem24.MAX_Y);
    }


    public float getLocationX() {
        return x;
    }

    public float getLocationY() {
        return y;
    }
}
