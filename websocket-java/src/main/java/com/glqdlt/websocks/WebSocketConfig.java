package com.glqdlt.websocks;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

	
//	Send Url에 대한 전역 prefix와 subscribe에 대한 전역 prefix를 설정할 수 있습니다. 이는 WebSocketMessageBrokerConfigurer 인터페이스의 configureMessageBroker method 에서 수정하면 됩니다. (아래는 모든 send prefix를 app으로 지정하고, subscribe의 기본 prefix를 subscribe로 지정했습니다.)

	// enableSimpleBroker 는 subscript 받을 경로로 보여진다.
	// app prefix 는 ws:127.0.0.1:8080/app/~~ 이런식으로 websocker prefix가 붙는거고
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
    }

    
	//    EndPoint의 경우, SockJS를 사용할지, WebSocket을 사용할지에 따라 다른 설정을 해주게 됩니다. STOMP를 이용하는 것은 대부분 SockJS를 이용해서 Browser의 적합성을 높이는 경우가 많기 때문에, SockJS를 이용하는 것이 일반적입니다. WebSocketMessageBrokerConfigurer 인터페이스의 registerStompEndpoints method를 다음과 같이 정의합니다.
    // app.js 에 보면 아래 gs-guide-websocket 로 connection 하는 걸 볼수 있다.
    
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/gs-guide-websocket").withSockJS();
    }

}