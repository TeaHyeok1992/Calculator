package main;

import java.util.Arrays;
import java.util.Stack;

public class preFix {
	public static int getInfixResult(String expression) {
        int answer = 0;
        String[] op = {"+", "-", "*", "/"};
        Stack<Integer> stack = new Stack<>();

        for (char c : expression.toCharArray()) {
            if (Arrays.asList(op).contains(c + "")) {
                int second = stack.pop();
                int first = stack.pop();

                switch (c) {
                    case '+':
                        stack.push(first + second);
                        break;
                    case '-':
                        stack.push(first - second);
                        break;
                    case '*':
                        stack.push(first * second);
                        break;
                    case '/':
                        stack.push(first / second);
                        break;
                }
            } else {
                stack.push(Integer.parseInt(c + ""));
            }
        }

        answer = stack.pop();
        return answer;
    }

}
