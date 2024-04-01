# Tier 3 Tech Quiz

To get started:

## Run the project using Docker (preferred)
```
bash ./docker-start.sh
# Navigate to http://localhost:3000/
```

### Start Rails console
```
docker exec -it  -u rails t3tq /bin/bash --login
bundle exec pry -r ./config/environment
```

## On your local machine (harder)

### If on a Mac, do these first

```
brew install rvm
rvm install ruby-3.3.0
rvm use ruby-3.3.0
```

### For Linux or other, follow the above steps translating to your computer's operating system

### Once the right version of ruby is in place (3.3.0), run these steps

```
bundle install
bundle exec rake db:refresh
bundle exec rails server
# Navigate to http://localhost:3000/
```

### Start Rails console
```
bundle exec pry -r ./config/environment
```

### Notes from Patrick Kim
Wanted to showcase my work through agile environment using JIRA and PRs.
![JIRA](https://gyazo.com/ff43e22286fe3b5ad4bcd6a76dfb96a3)
I have utilized JIRA to show an example of creating a story in a sprint.

With story in mind, I utilized the name of the story (TSSC-1) [TSSC means Teachstone: Sneaky Cats], to create PRs.

Here are the list of PRs according to each issue:
Issue 1 - TSSC-1_user_reset_password (https://github.com/pkim050/tier3-tech-quiz/tree/TSSC-1_user_reset_password)
Issue 2 - TSSC-2_javascript_pop_up_issue (https://github.com/pkim050/tier3-tech-quiz/tree/TSSC-2_javascript_pop_up_issue)
Issue 3 - TSSC-3_javascript_error (https://github.com/pkim050/tier3-tech-quiz/tree/TSSC-3_javascript_error)
Issue 4 - TSSC-4_session_issue (https://github.com/pkim050/tier3-tech-quiz/tree/TSSC-4_session_issue)
Issue 5 - TSSC-5_user_index_issue (https://github.com/pkim050/tier3-tech-quiz/tree/TSSC-5_user_index_issue)
Issue 6 - TSSC-6_order_issue (https://github.com/pkim050/tier3-tech-quiz/tree/TSSC-6_order_issue)

Thank you so much for this opportunity, it has been a lot of fun. The instructions on getting the application running
is very helpful. Looking forward to hearing from you soon!

- Patrick Kim
