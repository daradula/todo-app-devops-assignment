# Todo List Application

Name: Kumari M.D.M.D.
Student ID: ITBIN-2211-0214
Role: Full-Stack Developer & DevOps Engineer



## Project Description
A simple todo list application with add, delete, complete, and filter features.

## Live Deployment
🔗 **Live URL:**  https://todo-app-devops-assignment-wm8z.vercel.app/


## Technologies Used
**Frontend:**HTML5, CSS3,  JavaScript 
**Styling:** CSS Flexbox, CSS Grid, Gradient Backgrounds
**Storage:** Browser LocalStorage API
**CI/CD:** GitHub Actions
**Deployment:**Vercel
**Version Control:** Git & GitHub


## Features
- Add new tasks with validation
- Delete individual tasks
- Mark tasks as completed/incomplete
- Filter tasks (All/Active/Completed)
- Clear all completed tasks
- Real-time task counter
- Data persistence with Local Storage
- Fully responsive design
- Modern, gradient UI

## Branch Strategy
- main - Production
- develop - Integration
- feature - Features

## Individual Contributions
 (DevOps) & (Developer)

- Repository setup
- CI/CD workflows
- Deployment configuration
- HTML structure
- CSS styling
- JavaScript logic

## Setup
```bash
git clone  https://github.com/daradula/todo-app-devops-assignment.git 
cd todo-devops-assignment
open src/index.html in browser 

##  Docker Deployment

### Prerequisites
- Docker Desktop installed (version 24.0+)
- Docker Compose installed (version 2.0+)
- 2GB free disk space
- 1GB free RAM

### Quick Start

#### Build and Start
```bash
# Build images
docker-compose build

# Start containers
docker-compose up -d

# Check status
docker-compose ps
```

#### Access Application
```
http://localhost:8080
```

#### View Logs
```bash
# All logs
docker-compose logs

# Follow logs
docker-compose logs -f web

# Last 50 lines
docker-compose logs --tail=50 web
```

#### Stop Application
```bash
# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```



## Docker Commands

### Container Management
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# Rebuild after changes
docker-compose up -d --build
```

### Debugging
```bash
# Container status
docker-compose ps

# Check health
docker inspect --format='{{json .State.Health}}' todo-app

# Shell access
docker-compose exec web sh

# Resource usage
docker stats todo-app
```


##  Architecture

### Container Details

| Property | Value |
|----------|-------|
| Base Image | nginx:alpine (~23MB) |
| Container Name | todo-app |
| Port Mapping | 8080:80 |
| Network | todo-network (bridge) |
| User | appuser (non-root) |
| Health Check | Every 30s |
| Restart Policy | unless-stopped |

### Resource Limits
```yaml
CPU: 0.5 cores max, 0.25 cores reserved
Memory: 256MB max, 128MB reserved
```

### Security Features

- ✅ Non-root user execution
- ✅ Minimal Alpine base image
- ✅ Custom network isolation
- ✅ Automated health checks
- ✅ No secrets in image layers



##  Performance

### Build Optimization

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Image Size | 140MB | 23MB | 83.6% |
| Build Context | 127MB | 8.5KB | 99.99% |
| Build Time (cold) | 60s | 12s | 80% |
| Build Time (cached) | 45s | 3s | 93.3% |

### Runtime Performance
```
Startup Time: 4.0 seconds
Memory Usage: ~12MB (idle)
CPU Usage: ~0.05% (idle)
```



##  Troubleshooting

### Port Already in Use

**Error:** `address already in use`

**Solution:**
```yaml
# Edit docker-compose.yml
ports:
  - "9090:80"  # Changed from 8080
```

Access at: `http://localhost:9090`



### Container Won't Start

**Solution 1:** Check logs
```bash
docker-compose logs web
```

**Solution 2:** Rebuild
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```



### Changes Not Reflecting

**Solution:**
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```


### Docker Daemon Not Running

**Error:** `Cannot connect to Docker daemon`

**Solution:**
1. Open Docker Desktop
2. Wait for "Docker Desktop is running"
3. Retry command



##  Environment Variables

Edit `docker-compose.yml` to customize:
```yaml
environment:
  - NODE_ENV=production
  - APP_VERSION=1.0.0
  - TZ=Asia/Colombo
```


##  Production Deployment

### Considerations

1. **Environment-specific configs**
```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

2. **Enable SSL/TLS**
   - Use reverse proxy (Nginx/Traefik)
   - Configure SSL certificates

3. **Monitoring & Logging**
   - Container health monitoring
   - Log aggregation (ELK stack)
   - Resource tracking (Prometheus)

4. **Backup Strategies**
   - Regular volume backups
   - Configuration versioning
   - Database backups (if applicable)

5. **Orchestration**
   - Kubernetes (large-scale)
   - Docker Swarm (simpler setups)



##  Docker Files

### Dockerfile
- Uses nginx:alpine base
- Non-root user security
- Health checks configured
- Optimized layer caching

### docker-compose.yml
- Service orchestration
- Custom networking
- Resource limits
- Health monitoring

### .dockerignore
- Excludes unnecessary files
- 99.99% context reduction
- Improves build speed
- Enhances security


##  Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Alpine Linux Docs](https://alpinelinux.org/docs/)






