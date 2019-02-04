package com.uniovi.quizapp.logic.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.quizapp.dataacess.dao.api.IChallangeDao;
import com.uniovi.quizapp.dataacess.dao.api.IRankDao;
import com.uniovi.quizapp.dataacess.dao.api.ISectionDao;
import com.uniovi.quizapp.dataacess.dao.api.IUserDao;
import com.uniovi.quizapp.dataacess.model.challange.Challange;
import com.uniovi.quizapp.dataacess.model.history.Level;
import com.uniovi.quizapp.dataacess.model.history.Section;
import com.uniovi.quizapp.dataacess.model.user.Notification;
import com.uniovi.quizapp.dataacess.model.user.Rank;
import com.uniovi.quizapp.dataacess.model.user.ResultLevel;
import com.uniovi.quizapp.dataacess.model.user.ResultSection;
import com.uniovi.quizapp.dataacess.model.user.RoleUser;
import com.uniovi.quizapp.dataacess.model.user.User;
import com.uniovi.quizapp.logic.api.IUserManagement;
import com.uniovi.quizapp.logic.general.AbstractManagement;
import com.uniovi.quizapp.logic.impl.dto.UserDto;
import com.uniovi.quizapp.logic.impl.dto.level.LevelDto;
import com.uniovi.quizapp.logic.impl.dto.section.SectionDto;

@Service
public class UserManagementImpl extends AbstractManagement implements IUserManagement {

	@Autowired
	private IUserDao userDao;
	@Autowired
	private ISectionDao sectionDao;
	@Autowired
	private IChallangeDao challangeDao;
	@Autowired
	private IRankDao levelRankDao;

	@Override
	public UserDto getUser(String username) {
		User user = userDao.findByUsername(username);
		UserDto userDto = mapper.convertValue(user, UserDto.class);

		return userDto;
	}

	@Override
	public UserDto registerNewUser(UserDto userDto) throws Exception {
		User userOld = userDao.findByUsername(userDto.getUsername());
		
		if (userOld != null) {
			throw new Exception("Usuario repetido");
		}
		
		Section firstSection = sectionDao.findFirstSection();
		List<Challange> challanges = challangeDao.findAllChallangeSection();
		List<Challange> trophies = challangeDao.findAllTrohpies();
		Rank firstLevelRank = levelRankDao.findFirstLevelRank();
		
		User user = new User(
				userDto.getUsername(), 
				userDto.getPassword(), 
				userDto.getMail(),
				firstSection,
				challanges,
				trophies,
				firstLevelRank,
				RoleUser.GENERAL
				);
		
		userDao.saveOrUpdate(user);
				
		return userDto;
	}

	@Override
	public boolean isCorrectUsername(String username) {
		return userDao.findByUsername(username) == null;
	}

	@Override
	public UserDto findAllNotifications(String username) {
		User user = this.userDao.findByUsername(username);
		
		UserDto dto = new UserDto();
		dto.setNotifications(user.getNotifications());
		
		SectionDto sectionContinue = new SectionDto();
		LevelDto levelContinue = new LevelDto();
		
		int contSection = 0;
		for (ResultSection rs: user.getResultSections().values()) {
			if (!rs.isCompleteAll() && rs.isUnlocked() || contSection == user.getResultSections().values().size()-1) {
				Section section = this.sectionDao.find(rs.getIdSection());
				sectionContinue = mapper.convertValue(section, SectionDto.class);
				sectionContinue.setUnlocked(true);
				
				int contLevel = 0;
				for (ResultLevel rl: rs.getResultLevels().values()) {
					if (rl.isUnlocked() && !rl.isComplete() || contLevel == rs.getResultLevels().values().size()-1) {
						Level level = section.getLevel(rl.getId());
						levelContinue = mapper.convertValue(level, LevelDto.class);
						levelContinue.setUnlocked(true);
						levelContinue.setCodSection(section.getOrden());
						break;
					}
					
					contLevel++;
				}
				
				break;
			}
			
			contSection++;
		}
		
		dto.setSectionContinue(sectionContinue);
		dto.setLevelContinue(levelContinue);
		
		return dto;
	}

	@Override
	public List<UserDto> filterUserByName(String username) {
		List<UserDto> usersDto = new ArrayList<>();
		List<User> users = this.userDao.filterByField("username", username);
		
		for (User user: users) {
			UserDto userDto = new UserDto();
			userDto.setUsername(user.getUsername());
			userDto.setMail(user.getMail());
			usersDto.add(userDto);
		}
		
		return usersDto;
	}

	@Override
	public RoleUser findUserRole(String username) {
		User user = this.userDao.findByUsername(username);
		return user.getRole();
	}

	@Override
	public void removeNotification(String username, String id) {
		User user = this.userDao.findByUsername(username);
		Notification notRemove = new Notification();
		
		for (Notification not: user.getNotifications()) {
			if (not.getId().toString().equals(id)) {
				notRemove = not;
				break;
			}
		}
		
		user.getNotifications().remove(notRemove);
		userDao.saveOrUpdate(user);
	}

	
}
