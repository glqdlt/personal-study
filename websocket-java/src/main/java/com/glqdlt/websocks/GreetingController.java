package com.glqdlt.websocks;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {

	// @SubscribeMapping("/hooks")
	// client에서 subscribe 할 수 있는 url을 지정합니다. 특정 message가 발생하거나 event가 발생했을 때,
	// Client에 값을 전송하는데 사용합니다.

	@MessageMapping("/hello")
	// STOMP client의 send에 대한 target url입니다.

	@SendTo("/topic/greetings")
	// STOMP client의 subscribe에 대한 target url을 지정합니다. (지정되지 않은 경우,
	// @MessageMapping에 지정된 URL + @Configuration에서 설정된 prefix URL을 이용합니다. )

	public Greeting greeting(HelloMessage message) throws Exception {
		// Thread.sleep(1000); // simulated delay
		// return new Greeting("Hello, " + message.getName() + "!");
		
		/**
		 * 채팅 처럼 하기 위해 전문을 그냥 send 한다.
		 */
		return new Greeting(message.getName());
	}

}