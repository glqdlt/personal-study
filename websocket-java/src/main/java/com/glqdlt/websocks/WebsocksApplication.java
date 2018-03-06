package com.glqdlt.websocks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// 기본 베이스
// https://spring.io/guides/gs/messaging-stomp-websocket/

// stomp  에관한 이야기
// http://netframework.tistory.com/entry/Spring-4x%EC%97%90%EC%84%9C%EC%9D%98-WebSocket-SockJS-STOMP

// boot websocks chat
// http://asfirstalways.tistory.com/359
// https://github.com/salmar/spring-websocket-chat

@SpringBootApplication
public class WebsocksApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebsocksApplication.class, args);
	}
}
