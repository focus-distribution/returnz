package bunsan.returnz.persist.repository;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.stereotype.Repository;

import bunsan.returnz.infra.redis.service.RedisSubscriber;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Repository
public class RedisSideBarRepository {
	private Map<String, ChannelTopic> sideBarTopics;
	private final RedisMessageListenerContainer redisMessageListener;

	private final RedisSubscriber redisSubscriber;
	@PostConstruct
	private void init (){

		sideBarTopics= new HashMap<>();
		sideBarTopics.put("side-bar",new ChannelTopic("side-bar"));
		redisMessageListener.addMessageListener(redisSubscriber, sideBarTopics.get("side-bar"));
	}

	public ChannelTopic getTopic (String topic){
		return sideBarTopics.get(topic);
	}
}
