package bunsan.returnz.domain.game.util.calendar_range;

import java.time.LocalDateTime;

import lombok.Getter;

@Getter
public class WeekRange {
	private LocalDateTime weekFirstDay;
	private LocalDateTime weekLastDay;

	public WeekRange(LocalDateTime weekFirstDay, LocalDateTime weekLastDay) {
		this.weekFirstDay = weekFirstDay;
		this.weekLastDay = weekLastDay;
	}

}
