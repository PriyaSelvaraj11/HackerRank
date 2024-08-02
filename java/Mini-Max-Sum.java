import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<Integer> arr) {
    // Write your code here
        long[] prefixArr = new long[5];
        long maxValue = Long.MIN_VALUE;
        long minValue = Long.MAX_VALUE;
        
        int len = 5;
        
        prefixArr[0] = 0;
        for(int i=1;i<len;i++) {
            prefixArr[i] = prefixArr[i-1]+arr.get(i-1);
        }
        long suffixSum = 0;
        for(int i=len-1;i>=0;i--) {
            if(i!=len-1) {
                suffixSum += arr.get(i+1); 
            }
            minValue = Math.min(minValue, prefixArr[i]+suffixSum);
            maxValue = Math.max(maxValue, prefixArr[i]+suffixSum);
        }
        System.out.print(minValue+ " "+ maxValue);
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.miniMaxSum(arr);

        bufferedReader.close();
    }
}
